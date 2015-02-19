import {getIntParameter, getStringParameter, bindAction} from 'angular2/src/test_lib/benchmark_util';

var benchmarkType = getStringParameter('benchmarkType');

export function main() {
  angular.bootstrap(document.body, ['app']);
}

angular.module('app', ['ngTasty'])
.config(function($compileProvider) {
  if ($compileProvider.debugInfoEnabled) {
    $compileProvider.debugInfoEnabled(false);
  }
})
.controller('DataController', function($rootScope, $scope) {
  console.log('eccomi 2')
  bindAction('#destroyDom', destroyDom);
  bindAction('#createDom', createDom);
  var previousType;

  $scope.benchmarkType = benchmarkType;

  $scope.end = 5000;
  $scope.resource = {
    "header": [
      {
        "key": "name", 
        "name": "Name"
      },
      {
        "key": "star", 
        "name": "star"
      },
      {
        "key": "sf-location", 
        "name": "SF Location"
      }
    ],
    "rows": []
  };
  for (var i = 1000; i < $scope.end; i++) {
    $scope.resource.rows.push({ 
      "name": "Ritual Coffee Roasters " + i, 
      "star": "★★★★★  " + i, 
      "sf-location": "Hayes Valley " + i,
      "name2": "Ritual Coffee Roasters " + i, 
      "star2": "★★★★★  " + i, 
      "sf-location2": "Hayes Valley " + i,
      "name3": "Ritual Coffee Roasters " + i, 
      "star3": "★★★★★  " + i, 
      "sf-location3": "Hayes Valley " + i,
      "name4": "Ritual Coffee Roasters " + i 
    });
  }
  
  $scope.itemsPerPage = 10;
  $scope.listItemsPerPage = [10, 25, 50, 100]; 

  function destroyDom() {
    $scope.$apply(function() {
      previousType = $scope.benchmarkType;
      console.log(previousType)
      $scope.benchmarkType = 'ngBind';
      console.log($scope.benchmarkType)
    });
  }

  function createDom() {
    $scope.$apply(function() {
      for (var i = $scope.resource.rows.length; i < $scope.end; i++) {
        $scope.resource.rows.push({ 
          "name": "Ritual Coffee Roasters " + i, 
          "star": "★★★★★  " + i, 
          "sf-location": "Hayes Valley " + i,
          "name2": "Ritual Coffee Roasters " + i, 
          "star2": "★★★★★  " + i, 
          "sf-location2": "Hayes Valley " + i,
          "name3": "Ritual Coffee Roasters " + i, 
          "star3": "★★★★★  " + i, 
          "sf-location3": "Hayes Valley " + i,
          "name4": "Ritual Coffee Roasters " + i 
        });
      }
      $scope.benchmarkType = previousType;
      console.log($scope.benchmarkType)
    });
    $scope.end += 2;
  }
});