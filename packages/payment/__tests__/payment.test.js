'use strict';

const payment = require('..');
const assert = require('assert').strict;

assert.strictEqual(payment(), 'Hello from payment');
console.info('payment tests passed');
