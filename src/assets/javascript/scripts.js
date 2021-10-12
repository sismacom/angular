(function() {
    "use strict";
  
    angular.module('myApp', ['ngResource'])
      .factory('Dealers', function($resource) {
        return $resource('dealers.json');
      })
      .controller('DealersCtrl', function($scope, Dealers) {
        var self = this;
        self.dealers = Dealers.query();
  
        self.expandAll = function(expanded) {
          // $scope is required here, hence the injection above, even though we're using "controller as" syntax
          $scope.$broadcast('onExpandAll', {
            expanded: expanded
          });
        };
  
      })
          .directive('expand', function () {
              function link(scope, element, attrs) {
                  scope.$on('onExpandAll', function (event, args) {
                      scope.expanded = args.expanded;
                  });
              }
              return {
                  link: link
              };
          });
  }());