/* 

Repeat the preceding exercise, but use await intead of then

*/

const loadImage = async (url) => {
    const res = await fetch(url, {
        headers: {
            "Content-Type": "image/png"
        }
    })
    const blob = await res.blob()
    return blob
}

const urls = ["./images/hanafuda-1.png", "./images/hanafuda-2.png", "./images/hanafuda-3.png", "./images/hanafuda-4.png", 
"https://www.verywellmind.com/thmb/WlSoCQA2SmugRqmbP_QAilT6b60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-593384542-5c5b3eb546e0fb00017dcf7f.jpg",
"https://static.toiimg.com/thumb/imgsize-98896,msid-94358574,width-400,resizemode-4/94358574.jpg"]

const promises = urls.map(loadImage)

const appendImages = async () => {
    const results = await Promise.allSettled(promises)

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
}

appendImages()



