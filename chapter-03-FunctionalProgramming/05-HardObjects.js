//Counter

function constructCounter(initial_value, step){
    let current_count = initial_value;
    let adding_step = step
    return Object.freeze({
            count: () => {
                current_count+=adding_step
                return current_count-adding_step
            }
        })
}


let counter = constructCounter(0, 2)
console.log(counter.count());
console.log(counter.count());
//counter.count = 10; Can't do this, because it's a hard object
//counter.current_count = 5; Can't do this, because it's a hard object