// 2. 
// • Write a program that formats a value as a number, percentage, and dollar amount. 
// • Explore all currency display options. 
// • Turn grouping on and off and show the meanings of the various bounce on the number of digits.

const num = 59.43

const lang = 'en' // ['en', 'de', 'fr', 'zh', 'jo', 'ko', 'ar']
const format_options = [
    {},
    {
        style: 'percent'
    },
    {
        style: 'currency',
        currency: 'USD'
    }
]

for (const format_option of format_options){
    console.log(num.toLocaleString(lang, format_option))
}

