/**
 * Demonstrate space requirements for number representation for increasing radix
 * decreases logarithmically
 * WIP
 */
'use strict';

var base16Encoding = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f'
];

var PowerRadix = require('../lib/index');

var Bytes20InBits = [];
for (var i=0; i<20; i++) {
  for (var k=0; k<8; k++) {
    Bytes20InBits.push(1);
  }
}

console.log('20 bytes is '+Bytes20InBits.length+' bits');
var pr = new PowerRadix(Bytes20InBits, [0, 1]);
var hexEncoded20Bytes = pr.toArray(base16Encoding);
console.log('hex representation length is '+hexEncoded20Bytes.length);
console.log(hexEncoded20Bytes.join(''));

var encoded;
for(var i=60; i>1; i--) {
  encoded = pr.toArray(i);
  console.log('160 bits represented in radix '+i+' has length:'+encoded.length);
}
