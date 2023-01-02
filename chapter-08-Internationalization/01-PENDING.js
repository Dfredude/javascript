class Person{
    constructor(first_name, last_name, sex, marital_status){
        this.first_name = first_name
        this.last_name = last_name
        this.sex = sex
        this.marital_status = marital_status
    }
    
}

const persons = [new Person("Alex", "Smith", "m", "Married")]

for(let person of persons){
    if (person.sex.toLowerCase() == "m"){
        let prefix = "Mr.".toLocaleString('fr')
        new Intl.Locale()
        console.log(`${prefix} ${new Intl.DisplayNames(['zh-Hant'], { type: 'region' })}`)
    }
}


const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(['zh-Hant'], { type: 'region' });

console.log(regionNamesInEnglish.of('US'));
// expected output: "United States"

console.log(regionNamesInTraditionalChinese.of('US'));
// expected output: "美國"

