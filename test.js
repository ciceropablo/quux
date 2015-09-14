'use strict';

var test = require('tape');
var quux = require('./');

test('quux', function(t) {
  t.equal(quux(), 'quux', 'should be `quux`');
  t.end();
});
