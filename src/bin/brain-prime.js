#!/bin/env node
import { yourName, play } from '..';
import prime from '../games/isPrime.js';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');

const name = yourName();
play(prime, name);
