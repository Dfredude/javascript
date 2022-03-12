const mkString = (array, { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } = {}) => {
    let newString = `${leftDelimiter}`
    for (let i=0; i<array.length; i++) {
        if (i+1 < array.length){
            newString += `${array[i]} ${separator}`
        }
        else {
            newString += `${array[i]}`
        }
    }                                                                                                                                       
    newString += `${rightDelimiter}`
    return newString
}

console.log(mkString(["asdada", 651651, "Random", "4984", "Bye"], {
    leftDelimiter: "(" //Define whatever variable you want, or don't
}));

console.log(mkString(["asdada", 651651, "Random", "4984", "Bye"]));