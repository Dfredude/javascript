// • Make an array with all two–letter (ISO 639-1) language codes. 
// • For each of them, format date and time. 
// • How many different formats do you find?

const langs = ["ab","aa","af","ak","sq","am","ar","an","hy","as","av","ae","ay","az","bm","ba","eu","be","bn","bi","bs","br","bg","my","ca","ch","ce","ny","zh","cu","cv","kw","co","cr","hr","cs","da","dv","nl","dz","en","eo","et","ee","fo","fj","fi","fr","fy","ff","gd","gl","lg","ka","de","el","kl","gn","gu","ht","ha","he","hz","hi","ho","hu","is","io","ig","id","ia","ie","iu","ik","ga","it","ja","jv","kn","kr","ks","kk","km","ki","rw","ky","kv","kg","ko","kj","ku","lo","la","lv","li","ln","lt","lu","lb","mk","mg","ms","ml","mt","gv","mi","mr","mh","mn","na","nv","nd","nr","ng","ne","no","nb","nn","ii","oc","oj","or","om","os","pi","ps","fa","pl","pt","pa","qu","ro","rm","rn","ru","se","sm","sg","sa","sc","sr","sn","sd","si","sk","sl","so","st","es","su","sw","ss","sv","tl","ty","tg","ta","tt","te","th","bo","ti","to","ts","tn","tr","tk","tw","ug","uk","ur","uz","ve","vi","vo","wa","cy","wo","xh","yi","yo","za","zu"]

let formats = new Set()
const date = new Date()
for (const lang of langs){
    formats.add(date.toLocaleString(lang))
}


console.log("We have " + formats.size + " different formats")
for (const format of formats){
    console.log(format)
}