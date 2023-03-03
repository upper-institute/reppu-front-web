'use strict';

const synthesis = require('..');
const assert = require('assert').strict;

assert.strictEqual(synthesis(), 'Hello from synthesis');
console.info('synthesis tests passed');
