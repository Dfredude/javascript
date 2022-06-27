function createMessage(date, sender){
    return {
        date: new Date(...date),
        sender: sender
    }
}

let messages = [createMessage([2020, 11, 15], "Alex"), 
createMessage([2020, 11, 18], "John"),
createMessage([2019, 1, 5], "Karen"),
createMessage([2016, 10, 30], "Balbasaur")]

console.log(messages.sort((x, y) => x.date - y.date))