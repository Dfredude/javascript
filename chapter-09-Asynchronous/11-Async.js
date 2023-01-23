const loadImage = async (url) => {
    const res = await fetch(url, {
        headers: {
            "Content-Type": "image/png"
        }
    })
    const blob = await res.blob()
    return blob
}

// Describe the difference between

const loadCatImage = async () => {
    try {
        const result = await fetch('https://aws.random.cat/meow')
        const imageJSON = await result.json()
        return loadImage(imageJSON.file)
    } catch(e){
        console.error(e)
        return "Broken image" // Difference: If loadImage() rejects, it won't be handled here
    }
}

const loadCatImage2 = async () => {
    try {
        const result = await fetch('https://aws.random.cat/meow')
        const imageJSON = await result.json()
        return await loadImage(imageJSON.file)
    } catch {
        return "Broken image"
    }
}

loadCatImage().then((val) => {
    console.log(val)
}).catch((e) => console.log(e)) // Differnece: We need to catch the error here

loadCatImage2().then((val) => {
    console.log(val)
})