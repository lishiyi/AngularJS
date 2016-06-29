app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
  shows.success(function(shows){
    $scope.shows = shows;
  });
}]);