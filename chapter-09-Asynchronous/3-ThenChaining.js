/* 
Invoke the produceRandomAfterDelay function 
from the preceding exercise twice 
and print the sum once the summands are available 
*/

// 9.2 Function
function produceRandomAfterDelay(delay){
    const invokeAfterDelay = (delay, callback) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(callback()), delay)
        })
    }
    return invokeAfterDelay(delay, () => Math.random())
}

produceRandomAfterDelay(100).then((result) => {
    produceRandomAfterDelay(2000).then((result2) => {
        console.log(result + result2)
    })
}).catch((err) => {
    console.error(err)
});