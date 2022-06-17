// Using Regular Expression to clean up phone number and credit card numbers

const removeChar = (char, string) => {
    let index = string.indexOf(char)
    return string.slice(0, index) + string.slice(index+1)
}

const clean = (text, text2) => ({
    phoneNumbers : cleanPhoneNumbers(text),
    creditCardNumbers : cleanCreditCardNumbers(text2)})

function cleanPhoneNumbers(text){
    let regex = /\(?\d{3}\)?.?\d{3}-?\d{3}/g
    let cleanNumbers = []
    let matches = text.match(regex)
    for (let match of matches){
        let submatches = match.match(/ ?-?\(?\)?/g)
        submatches = submatches.filter((value) => value != '')
        for (let submatch of submatches){
            match = removeChar(submatch, match)
        }
        cleanNumbers.push(match)
    }
    return cleanNumbers
}

function cleanCreditCardNumbers(text){
    let regex = /\d{4} ?\d{4} ?\d{4} ?\d{4}/g
    let cleanNumbers = []
    let matches = text.match(regex)
    for (let match of matches){
        if (/ /g.test(match)){
            let submatches = match.match(/ /g)
            submatches = submatches.filter((value)=> value != '')
            for (let submatch of submatches){
                match = removeChar(submatch, match)
            }
        }
        cleanNumbers.push(match)
    }
    return cleanNumbers
}

console.log(clean(`Orbadiah,(071) 594-9799
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
Charo,3800506068`, `5108750396794307
5108756548903381
5007662445629198
5048372345089755
5100 1300 3420 9968
5100 1301 7002 4551
5516 8913 0744 1624
5591 8587 2815 9489
5199874216442945
5100137096572365
5326493858223566
5100147345574500
5109 41701630 1140
5434 82158413 2785
5002 35568168 8839
5195220124984079
5587918595388144
5449481941950784
53902244 13005870
50101229 15270580
51192649 67119156
50483747 21094789
5465881479937765
5100 171201707822
5228 981079355646
5479 302187619474
5048 377091321963
5100177665640623
5131088915451476
510275318 6377610
517877253 9526573
501012329 8327153
504837592 0385159
5100146350792148
5007669512504402
5100170871214796`))