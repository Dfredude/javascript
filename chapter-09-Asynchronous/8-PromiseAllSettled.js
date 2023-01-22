/* 

Make an array of image urls, some good, and some failing because of CORS 
( see the note at the end of section 9.2, " making promises,” page 188). 
Turn each into a promise:
const urls = [ . . .]
const promises = urls.map(loadImage)

Call on the array of promises. 
When that promise resolves, traverse the array, append the loaded images into a Dom element, and lock those that failed:

Promise.allSettled(promises)
    .then(results => {
        for (result of results)
            if (result.status === 'fulfilled) . . . else . . . 
    })

*/

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

const urls = ["./images/hanafuda-1.png", "./images/hanafuda-2.png", "./images/hanafuda-3.png", "./images/hanafuda-4.png", 
"https://www.verywellmind.com/thmb/WlSoCQA2SmugRqmbP_QAilT6b60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-593384542-5c5b3eb546e0fb00017dcf7f.jpg",
"https://static.toiimg.com/thumb/imgsize-98896,msid-94358574,width-400,resizemode-4/94358574.jpg"]

const promises = urls.map(loadImage)

Promise.allSettled(promises)
    .then((results) => {
        console.log(results)
        for (const result of results) {
            if (result.status === 'fulfilled') {
                const image = document.createElement('img')
                image.height = 240
                image.src = URL.createObjectURL(result.value)
                document.getElementById('images').appendChild(image)
            } else {
                throw new Error("Couldn't append image: " + result.reason)
            }
        }
})


