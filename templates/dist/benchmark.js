var app = angular.module('Benchmark', ['<%= scriptAppName %>']);

app.config(function($compileProvider) {
  if ($compileProvider.debugInfoEnabled) {
    $compileProvider.debugInfoEnabled(false);
  }
});

app.controller('DataController', function($rootScope, $scope) {
  // ...

  benchmarkSteps.push({
    name: 'destroy',
    fn: function() {
      $scope.$apply(function() {
        previousType = $scope.benchmarkType;
        $scope.benchmarkType = 'none';
      });
    }
  });

  benchmarkSteps.push({
    name: 'create',
    fn: function() {
      $scope.$apply(function() {
        // ...
      });
    }
  });

  benchmarkSteps.push({
    name: '$apply',
    fn: function() {
      // ....
      $rootScope.$apply();
    }
  });
});
