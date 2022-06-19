// Replacing °Farenheit values with Celsius!

let values = `temperature
86 °F
42 °F
100 °F
54 °F
35 °F
34 °F
15 °F
45 °F
10 °F
74 °F
31 °F
69 °F
57 °F
82 °F
57 °F
39 °F
10 °F
51 °F
20 °F
99 °F
30 °F
37 °F
44 °F
60 °F
92 °F
27 °F
13 °F
62 °F
29 °F
98 °F
13 °F
42 °F
11 °F
23 °F
29 °F
37 °F
25 °F
96 °F
20 °F
90 °F
88 °F
60 °F
4 °F
71 °F
96 °F
98 °F
76 °F
55 °F
3 °F
38 °F
97 °F
76 °F
8 °F
9 °F
2 °F
80 °F
44 °F
55 °F
61 °F
81 °F
90 °F
49 °F
79 °F
64 °F
100 °F
16 °F
13 °F
70 °F
65 °F
29 °F
98 °F
65 °F
31 °F
66 °F
74 °F
7 °F
43 °F
63 °F
28 °F
94 °F
64 °F
84 °F
99 °F
42 °F
50 °F
88 °F
46 °F
37 °F
54 °F
15 °F
1 °F
98 °F
10 °F
88 °F
40 °F
28 °F
81 °F
60 °F
91 °F
79 °F`

function convertToCelsius(temperatures) {
    return temperatures.replace(/(\d+)(\s*°F)/g,(str, first, second)=>(`${((parseInt(first)-32)*5/9).toFixed(2)} °C`))    
}

console.log(convertToCelsius(values))


