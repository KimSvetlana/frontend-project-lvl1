#!/bin/env node
import {yourName,play} from "..";
import {isEven} from "../games/isEven.js";
console.log('Welcome to the Brain Games!');

let name = yourName();
play(isEven, name);
