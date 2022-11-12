// 3 - 
// • Show how numbers look different when you send English Arabic and Thai numerals. 
// • What other numerals can you produce?

const num = 59.43

const langs = ['en', 'ar-u-nu-arab', 'th-u-nu-thai'] // ['en', 'de', 'fr', 'zh', 'jo', 'ko', 'ar']

for (const lang of langs){
    console.log(num.toLocaleString(lang))
}