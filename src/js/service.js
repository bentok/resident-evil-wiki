'use strict';

angular
  .module('app', [])
  .controller('ServiceController', ['$scope', '$http', serviceController]);

function serviceController(scope, http) {
  var url = 'js/re1.json';
  http.get(url).success(function(response){
      scope.data = response.results;
      console.log(scope.data);
    });
}
