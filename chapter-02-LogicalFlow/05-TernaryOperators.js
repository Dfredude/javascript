let valuesArray = [undefined, null, 5, "Hello", NaN, true, false]

//a||b and a?a:b are the same, except when they return NaN which is really weird

for (a of valuesArray){
    for (b of valuesArray){
        if (!(a === b)){
            // console.log(`${a} || ${b}`);
            // console.log(a||b);
            // console.log("-----------------");
            // console.log(`${a} ? ${a} : ${b}`);
            // console.log(a?a:b);
            // console.log("-----------------");
            if ((a||b) != (a?a:b)){
                console.log(`${a} || ${b}`);
                console.log(a||b);
                console.log("-----------------");
                console.log(`${a} ? ${a} : ${b}`);
                console.log(a?a:b);
                console.log("-----------------");
            }
        }
    }
}