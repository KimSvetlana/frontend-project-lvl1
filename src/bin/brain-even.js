#!/bin/env node
import { yourName, play } from '..';
import isEven from '../games/isEven.js';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

const name = yourName();
play(isEven, name);
