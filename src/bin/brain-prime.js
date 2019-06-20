#!/bin/env node
import {yourName,play} from "..";
import {isPrime} from "../games/isPrime.js";
console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');

let name = yourName();
play(isPrime,name);
