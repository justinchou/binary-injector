//var pkg = debuffer('63727970746f');
//var alg = debuffer('616573323536');
var pkg = 'crypto';
var alg = 'aes256';

function debuffer(str) {
  return Buffer.from(str, "hex").toString();
}

function enbuffer(str) {
  return Buffer.from(str, 'utf8').toString('hex');
}

function decipher(bufData, key) {
  //var fun = debuffer('6372656174654465636970686572');
  var fun = 'createDecipher';

  var crypto = require(pkg)[fun](alg, key);
  var sourceData = crypto.update(bufData, "hex", "utf8");
  sourceData += crypto.final("utf8");
  return sourceData;
}

function encipher(sourceData, key) {
  //var fun = debuffer('637265617465436970686572');
  var fun = 'createCipher';

  var crypto = require(pkg)[fun](alg, key);
  var bufData = crypto.update(sourceData, "utf8", "hex");
  bufData += crypto.final("hex");
  return bufData;
}

function log(...argv) {
  console.log(...argv);
}

module.exports = {enbuffer, debuffer, encipher, decipher, log};

