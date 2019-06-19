#!/bin/env node
import {yourName,play} from "..";
import {arithmeticProgression} from "../games/progression.js";
console.log('Welcome to the Brain Games!');

let name = yourName();
play(arithmeticProgression,name);

