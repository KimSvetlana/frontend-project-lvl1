#!/bin/env node
import {yourName,play} from "..";
import {calculation} from "../games/calculation.js";
console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

let name = yourName();
play(calculation,name);

