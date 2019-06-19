#!/bin/env node
import {yourName,play} from "..";
import {calculation} from "../games/calculation.js";
console.log('Welcome to the Brain Games!');

let name = yourName();
play(calculation,name);

