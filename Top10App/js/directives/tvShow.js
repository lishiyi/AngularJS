app.directive('tvShow', function(){
  return {
    strict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/tvShow.html'
  };
});