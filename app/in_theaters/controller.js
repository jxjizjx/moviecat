(function(angular) {
    'use strict';
    var data = {
        "count": 1,
        "start": 0,
        "total": 24,
        "subjects": [{
            "rating": {
                "max": 10,
                "average": 4.9,
                "stars": "25",
                "min": 0
            },
            "genres": ["悬疑", "奇幻", "冒险"],
            "title": "盗墓笔记",
            "casts": [{
                "alt": "https://movie.douban.com/celebrity/1274628/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/32917.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/32917.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/32917.jpg"
                },
                "name": "井柏然",
                "id": "1274628"
            }, {
                "alt": "https://movie.douban.com/celebrity/1337001/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/1451933721.86.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/1451933721.86.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1451933721.86.jpg"
                },
                "name": "鹿晗",
                "id": "1337001"
            }, {
                "alt": "https://movie.douban.com/celebrity/1275243/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/1417875699.12.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/1417875699.12.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1417875699.12.jpg"
                },
                "name": "马思纯",
                "id": "1275243"
            }],
            "collect_count": 79129,
            "original_title": "盗墓笔记",
            "subtype": "movie",
            "directors": [{
                "alt": "https://movie.douban.com/celebrity/1275585/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/11494.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/11494.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/11494.jpg"
                },
                "name": "李仁港",
                "id": "1275585"
            }],
            "year": "2016",
            "images": {
                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2370646859.jpg",
                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2370646859.jpg",
                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2370646859.jpg"
            },
            "alt": "https://movie.douban.com/subject/24827387/",
            "id": "24827387"
        }],
        "title": "正在上映的电影-北京"
    };
    var module = angular.module('moviecat.in_theaters', ['ngRoute','moviecatApp.httpService']);
    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/in_theaters', {
                templateUrl: 'in_theaters/view.html',
                controller: 'InTheatersController'
            });
        }
    ]);
    module.controller('InTheatersController', ['$scope', '$http','MyHttpService',
        function($scope, $http,MyHttpService) {
            //绑定假数据
            // $scope.subjects = data.subjects;
            // 使用离线数据
           /* 
            $scope.subjects = [];
            $http({
                method: 'GET',
                // url:'../datas/moviecat_api.json'
                // url: '/angular-boilerplate-master/app/datas/moviecat_api.json'
                //注意这个地址！！从项目的根目录开始找（最前面有个斜线）
                //  在线地址
                url:"http://localhost:1337/api.douban.com/v2/movie/in_theaters?count=3"
                // cache: $templateCache//缓存

            }).
            then(function(response) {
                console.log(response);
                $scope.subjects = response.data.subjects;
            }, function(response) {
                console.log(response);
                //错误的提示
                // $scope.errMsg = "Request failed : "+response.status+' ! '+response.statusText;
            });*/
            //豆瓣地址
            //var dataPath = 'https://api.douban.com/v2/movie/in_theaters';
            // $http.jsonp(dataPath).then(function(response){
            //     console.log(response);
            // }, function(response){
            //     console.log(response);
            // });
            // 自己的服务
            $scope.subjects = [];
            var dataPath = 'https://api.douban.com/v2/movie/in_theaters';
            var data = {
                count:3,
                start:1
            };
            MyHttpService.myJsonp(dataPath,data,function(data){
                console.log(data);
                $scope.subjects = data.subjects;
                //其他操作
                $scope.$apply();//重新整理$scope
            });
        }
    ]);
})(angular)