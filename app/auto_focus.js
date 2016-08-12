(function(angular){
    "use strict";

    angular.module('moivecat.autoFocus',[])
        .directive('autoFocus', ['$location',function($location){
            // Runs during compile
            return {
                
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                link: function($scope, iElm, iAttrs, controller) {
                    $scope.$location = $location;
                    $scope.$watch('$location.path()',function(now){
                        var aLink = iElm.children().attr('href');
                        console.log(aLink);
                        var category = aLink.substring(1,aLink.indexOf('/'));
                        // console.log(category);
                        // console.log(now);
                        // startsWith() 以什么开头
                        if(now.substring(1).startsWith(category)){
                            iElm.parent().children().attr('class','');
                            iElm.attr('class', 'active');
                        }
                    })
                    //angular中分装了jquery的一个子集jqlite
                    // console.log(iElm);
                    // iElm.on('click', function(event) {

                    //     console.log(iElm);
                    //     console.log(this);
                        
                    //     iElm.parent().children().attr('class','');
                    //     iElm.addClass('active');
                    //     // this.setAttribute('class', 'active');
                    // });
                }
            };
        }]);
})(angular);