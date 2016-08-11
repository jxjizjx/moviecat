(function(angular) {
    'use strict';

    var module = angular.module('moviecat.movie_list', ['ngRoute','moviecatApp.httpService']);
    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/:category/:page', {
                templateUrl: 'movie_list/view.html',
                controller: 'MovieListController'
            });
        }
    ]);
    module.controller('MovieListController', ['$scope', '$http','$route','MyHttpService','$routeParams','appConfig',
        function($scope, $http,$route,MyHttpService,$routeParams,appConfig) {
            //控制动画
            $scope.loading = true;
            
            //当前的地址
            var path = $routeParams.category;
            //当前第几页
            $scope.currentPage  = parseInt($routeParams.page) ;
            //每页的数量
            var count = 3;
            //总条数
            $scope.totalCount = 0;
            //总页数
            $scope.totalPage = 0;
            //起始第几条
            var start = ($scope.currentPage-1)*count;
            // 自己的服务
            $scope.subjects = [];
            // var dataPath = 'https://api.douban.com/v2/movie/'+path;
            var dataPath = appConfig.apiPath + path;
             
            var data = {
                count:count,
                start:start,
                q:$routeParams.q
            };
            // console.log(data);
            MyHttpService.myJsonp(dataPath,data,function(data){
                // console.log(data);
                $scope.totalCount = data.total;
                $scope.totalPage =  Math.ceil($scope.totalCount/count);
                $scope.subjects = data.subjects;
                 $scope.loading = false;
                //其他操作
                $scope.$apply();//重新整理$scope
            });
            //切换页面事件
            $scope.go = function(page){
                if(page<1||page>$scope.totalPage){
                    return ;
                }
                $route.updateParams({page:page});
            }
            
        }
    ]);
})(angular)