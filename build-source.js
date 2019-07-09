const {encipher, enbuffer, decipher, debuffer, log} = require('./helper');
const {description: key} = require('./package');
const Fs = require('fs');
const Path = require('path');

const encodeFile = (filename) => {
  const code = Fs.readFileSync(Path.join(__dirname, filename), 'utf8');
  log("source code\n", code);
  
  const encrypted = encipher(code, key);
//  log(encrypted);
  
  const buffered = enbuffer(encrypted);
//  log(buffered);
  
  return buffered;
};

const decodeFile = (buffered) => {
  const encrypted = debuffer(buffered);
//  log(encrypted);

  const code = decipher(encrypted , key);
//  log(code);

  return code;
}

const data = [
  "crypto", 
  "createDecipher",
  "createCipher",
  "aes256",
  "utf8",
  "hex",
  "./package.json",
];

const encoded = data.map(item => enbuffer(item));

const buffered = encodeFile('source.js');
encoded.push(buffered);

log('encoded data %j', encoded);

const code = decodeFile(buffered);
log("source code\n", code);

Fs.writeFileSync(Path.join(__dirname, 'test/data.js'), `module.exports = ${JSON.stringify(encoded)};`); 
