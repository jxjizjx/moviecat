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
                        // console.log(aLink);
                        var category = aLink.substring(1,aLink.indexOf('/'));
                        // console.log(category);
                        // console.log(now);
                        if(now.substring(1).startsWith(category)){
                            iElm.parent().children().attr('class','');
                            iElm.attr('class', 'active');
                        }
                    })
                    // iElm.on('click', function(event) {
                    //     iElm.parent().children().attr('class','');
                    //     this.setAttribute('class', 'active');
                    // });
                }
            };
        }]);
})(angular);