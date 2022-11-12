// 4 - Write a program that demonstrates the date and time formatting Styles in:
// • France
// • China
// • Egypt
// • Thailand (with Thai digits).

const date = new Date()
const tags = ['fr-FR', 'zh', 'ar', 'th-u-nu-thai']

for(const tag of tags){
    console.log(date.toLocaleString(tag))
}