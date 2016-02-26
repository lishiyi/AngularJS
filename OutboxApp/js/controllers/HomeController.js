app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
  
  	emails.success(function(emails){
      $scope.emails = emails;
    });
}]);