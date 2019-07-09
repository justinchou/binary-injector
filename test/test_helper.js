var {enbuffer, debuffer, decipher, encipher, log} = require("../helper");


console.log(
  enbuffer('crypto'),
  enbuffer('createDecipher'),
  enbuffer('createCipher'),
  enbuffer('aes256'),
  enbuffer("utf8"),
  enbuffer("hex"),
  enbuffer("./package.json"),
);
console.log(`
  63727970746f
  6372656174654465636970686572
  637265617465436970686572
  616573323536
  75746638
  686578
  2e2f7061636b6167652e6a736f6e
`);




var sourceFile = './test/data.js';

var hexFile = enbuffer(sourceFile);
log('hex file', hexFile);

var file = debuffer(hexFile);
log("file", file);




var sourceData = `
var userInfo = {
  username: "justin",
  password: "123456"
};
`;
log("sourceData: %s", sourceData);

var hexData = encipher(sourceData, 'balabala');
log('hex data', hexData);

var data = decipher(hexData, 'balabala');
log('data', data);
