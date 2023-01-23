/* Write complete programs that demonstrate the Promise.all and Promise.race functions of section 9.7, 
"Executing Multiple Promises" (page 196).

*/

import fetch from "node-fetch"

const loadImage = (url) => new Promise((resolve, reject) => {
    fetch(url, {
        headers: {
            "Content-Type": "image/png"
        }
    })
    .then((res) => res.blob())
    .then((res) => resolve(res))
    .catch((e) => {
        console.error(e)
        reject(e)
    })
}) 

const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hanafuda_January_Kasu_1_Alt.svg/800px-Hanafuda_January_Kasu_1_Alt.svg.png", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hanafuda_January_Hikari_Alt.svg/800px-Hanafuda_January_Hikari_Alt.svg.png", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hanafuda_November_Tanzaku_Alt.svg/800px-Hanafuda_November_Tanzaku_Alt.svg.png", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hanafuda_April_Kasu_1_Alt.svg/800px-Hanafuda_April_Kasu_1_Alt.svg.png"]
const promises = images.map(loadImage)    

const promiseAll = () => {
    Promise.all(promises)
    .then((values) => {
        console.log("Promise.all() is done!")
        console.log(values)
    })
}


const promiseRace = () => {
    Promise.race(promises)
    .then((val) => {
        console.log("Promise.race() is done!")
        console.log(val)
    })
}

// We don't know which callback is going to execute first
promiseAll()
promiseRace()