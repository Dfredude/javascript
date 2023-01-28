/* When work is scheduled for the future, it may happen that due to changing circumstances the work is no longer needed and it should be canceled.
Design a scheme for cancellation. 
Consider a multi-step process, such as in the proceeding exercise. 
At each stage, you will want to be able to abort the process.
There is no standard way yet of doing this in JavaScript but typically apis provide "cancellation tokens". 
A fetchImages function might receive an additional argument

const token = new CancellationToken()
const images = fetchImages(url, token)


The caller can later decide to call

token.cancel()

In the implementation of a cancelable async function, the call

token.throwIfCancellationRequested()

throws an exception if cancellation was indeed requested. Implement this mechanism and demonstrate it with an example.

*/

// import fetch from "node-fetch"

const url = "https://picsum.photos/v2/list"


class CancellationToken {
    cancellation_is_requested = false;
    cancel(){
        this.cancellation_is_requested = true;
    }
    throwIfCancellationRequested(){
        if (this.cancellation_is_requested){
            throw new Error("Task has been cancelled!")
        }
    }

}

async function fetchImage(url, token){
    const res = await fetch(url)
    token.throwIfCancellationRequested() // Stop
    const blob = await res.blob()
    return blob
}

async function fetchImages(url, token) {
    const res = await fetch(url)
    const imgs_data = await res.json()
    const images_container_node = document.getElementById("images")
    const button = document.getElementsByTagName("button")[0]
    try{
        for (const img_data of imgs_data) {
            const blob = await fetchImage(img_data.download_url, token)
            const img = document.createElement("img")
            img.src = URL.createObjectURL(blob)
            img.height = 120
            token.throwIfCancellationRequested() // Stop
            images_container_node.appendChild(img)
        }
        button.innerHTML = "Too late! Images have been loaded."
    } catch (e) {
        button.innerHTML = "Images load cancelled succesfully!"
        
    }
    button.setAttribute("disabled", true)

    
}

const token = new CancellationToken()

function cancel(){
    token.cancel()
}

fetchImages(url, token).then((res) => {
    console.log(url)
})


