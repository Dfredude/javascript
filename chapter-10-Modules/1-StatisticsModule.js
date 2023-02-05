/* Find a JavaScript library for statistical computation. 
Write a program that imports the library as an ECMAScript module 
and compute the mean and standard deviation of a data set.
*/

import s from "./node_modules/simple-statistics/dist/simple-statistics.js" // Bad practice. Should use `import s from "simple-statistics" (package.json maps the route)

const nums = [
39500,
50858,
15791,
25074,
86006,
74228,
4764,
12350,
15307,
75282,
25394,
62355,
33516,
66707,
11816,
92417,
79696,
13510,
48998,
3392,
10676,
4250,
97268,
91884,
43243,
72778,
3179,
43974,
8970,
73714,
26525,
99234,
12181,
8071,
56795,
63357,
74003,
64890,
25516,
19401,
76846,
14777,
85452,
35601,
60364,
18333,
64337,
56470,
51964,
88391
]

const average = s.mean(nums)
const std_dev = s.standardDeviation(nums)

console.log("For this data set... ")
console.log("The mean is: " + average)
console.log("The standard deviation is: " + std_dev)