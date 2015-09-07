'use strict';

angular
  .module('app', ['ngSanitize'])
  .controller('ServiceController', ['$scope', '$http', serviceController]);

function serviceController(scope, http) {

  http({
    method: 'JSONP',
    url: 'http://www.giantbomb.com/api/game/3030-27715/' +
         '?api_key=d2029bb22bd98ac08b54d148a4047617b22d3633' +
         '&format=jsonp' +
         '&json_callback=JSON_CALLBACK'
  })
  .success(function(data){
      scope.data = data.results;
      console.log(scope.data);
  });

  // http.get(url).success(function(response){
  //     scope.data = response.results;
  //     console.log(scope.data);
  //   });
}
