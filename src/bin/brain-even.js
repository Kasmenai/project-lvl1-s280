#!/usr/bin/env node

import greet, { evenCheck } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const name = greet();
evenCheck(name, 0);
