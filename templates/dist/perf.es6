var perfUtil = require('angular2/e2e_test/perf_util');

describe('ng1.x ngtasty benchmark', function () {
  var URL = 'benchmarks_external/src/ng_tasty/ngtasty_benchmark.html';

  afterEach(perfUtil.verifyNoBrowserErrors);

  [	
  	'ngBind',
    'collection',
    'equality'
  ].forEach(function(benchmarkType) {
    it('should log the stats with: ' + benchmarkType, function() {
      perfUtil.runClickBenchmark({
        url: URL,
        buttons: ['#destroyDom', '#createDom'],
        id: 'ng1.largetable.' + benchmarkType,
        params: [{
          name: 'columns',
          value: 100,
          scale: 'sqrt'
        },{
          name: 'rows',
          value: 20,
          scale: 'sqrt'
        },{
          name: 'benchmarkType',
          value: benchmarkType
        }]
      });
    });
  });
});
