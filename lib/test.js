// Generated by CoffeeScript 2.5.1
(function() {
  var API, test;

  test = require('ava');

  API = require('./index');

  test('foo', async(t) => {
    var data, i, j, len, ref;
    ({data} = (await API.index_daily({
      ts_code: '399300.SZ',
      start_date: 20181001,
      end_date: 20181010
    }, "trade_date,vol,amount,open,high,low,close")));
    console.log(data.fields);
    ref = data.items;
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      console.log(i);
    }
    return t.assert(data.items.length > 0);
  });

}).call(this);
