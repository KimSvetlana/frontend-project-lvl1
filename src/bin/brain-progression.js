#!/bin/env node
import { yourName, play } from '..';
import arithmeticProgression from '../games/progression.js';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?');

const name = yourName();
play(arithmeticProgression, name);
