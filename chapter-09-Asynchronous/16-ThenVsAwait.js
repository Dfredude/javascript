/*
Use the fetch API to load a (CORS-friendly) image.
Fetch the URL, 
then call blob() on the response to get a promise for the BLOB.
Turn it into an image as in the loadImage function. 
Provide two implementations, one using then and one using await.
*/

function thenLoadImage(){
    fetch("./images/hanafuda-1.png", {
        headers: {
            'Content-Type': 'image/png'
          }
    })
    .then((res) => res.blob())
    .then((blob) => {
        const text = document.createElement("h1")
        text.textContent = "Then"
        const image = document.createElement("img")
        image.height = 240
        image.src = URL.createObjectURL(blob)
        document.body.appendChild(text)
        document.body.appendChild(image)
    })    
}

async function awaitLoadImage() {
    const res = await fetch("./images/hanafuda-1.png", {
        headers: {
            'Content-Type': 'image/png'
          }
    })
    const blob = await res.blob()
    const text = document.createElement("h1")
    text.textContent = "Await"
    const image = document.createElement("img")
    image.height = 240
    image.src = URL.createObjectURL(blob)
    document.body.appendChild(text)
    document.body.appendChild(image)
}

awaitLoadImage()
thenLoadImage()