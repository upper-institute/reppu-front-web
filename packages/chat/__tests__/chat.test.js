'use strict';

const chat = require('..');
const assert = require('assert').strict;

assert.strictEqual(chat(), 'Hello from chat');
console.info('chat tests passed');
