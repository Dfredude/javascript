/*
Implement a simple module that provides
random integers, 
arrays of random integers, 
and random strings. 
Use as many different forms of the export syntax as you can.
*/

import Random, { randomNum, randomNums, randomString} from "./Random";

console.log(Random.randomNum(0, 20));

console.log(randomNum(0, 20));

console.log(randomNums(0, 50));

console.log(randomString(10));



