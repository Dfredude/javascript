let regex = /\(?\d{3}\)?.?\d{3}-?\d{3}/g

let string = `Orbadiah,(071) 594-9799
Haily,(509) 585-1229
Maiga,(176) 370-0798
Rodrigo,(241) 520-6059
Aurea,(913) 171-8124
Claude,(700) 2755900
Dino,(262) 5214333
Conrade,(708) 9684016
Janeen,0071031715
Storm,3762853215
Valera,557 124-6596
Chickie,105 150-2055
Karleen,559 791-2178
Danyelle,6775399227
Charo,3800506068`

console.log(string.match(regex));
