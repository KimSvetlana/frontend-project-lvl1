#!/bin/env node
import { yourName, play } from '..';
import calculation from '../games/calculation';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

const name = yourName();
play(calculation, name);
