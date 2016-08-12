(function(angular){
    angular.module('moviecat.detail', ['ngRoute','moviecatApp.httpService'])
        .config(['$routeProvider',function($routeProvider) {
            $routeProvider
                .when('/detail/:id',{
                    templateUrl:'movie_detail/view.html',
                    controller:'detailController'
                });
                 
        }])
        .controller('detailController', ['$scope','$routeParams','MyHttpService','appConfig', function($scope,$routeParams,MyHttpService,appConfig){
            //控制动画
            $scope.loading = true;
            var id = $routeParams.id;
            var dataPath =appConfig.apiPath+"subject/"+id;
            var data = {};
            //电影名
            $scope.movieName = '';
            //电影简介
            $scope.movieDesc = '';
            //电影海报
            $scope.movieImg = '';
            //更多详情
            $scope.movieMore = '';
            MyHttpService.myJsonp(dataPath,data,function(data){
                console.log(data);
                $scope.movieName = data.title ;
                $scope.movieDesc = data.summary ;
                $scope.movieImg = data.images.large;
                $scope.movieMore = data.alt;
                $scope.loading = false;
                //其他操作
                $scope.$apply();//重新整理$scope 
            });
        }])
})(angular)