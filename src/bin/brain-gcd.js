#!/bin/env node
import {yourName,play} from "..";
import {greatestDivider} from "../games/greatestDivider.js";
console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');

let name = yourName();
play(greatestDivider, name);

