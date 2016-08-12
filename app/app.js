(function(angular) {
    'use strict';
    // Declare app level module which depends on views, and components
    // angular.module('moviecat', ['ngRoute', 'moviecat.in_theaters', 'moviecat.coming_soon', 'moviecat.top250']).
    angular.module('moviecat', ['ngRoute','moviecat.detail','moviecat.movie_list', 'moivecat.autoFocus']).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/in_theaters/1'
            });
        }
    ])
    //抽象常量
    .constant('appConfig', {
        apiPath:'https://api.douban.com/v2/movie/'
    })
    //
    .controller('searchController', ['$scope','$route',
        function($scope,$route){
        $scope.seachInput = "";
        $scope.search = function(){
            $route.updateParams({category:'search',q:$scope.seachInput});
        }
    }])
})(angular)