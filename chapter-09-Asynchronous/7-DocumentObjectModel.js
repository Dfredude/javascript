/* Often a client side application needs to defer work until after the browser has finished loading the DOM. 
You can place such work into a listener for the DOMContentLoaded event. 
But if document.readyState != 'loading', the loading has already happened, and the event won't fire again. 
Capture both cases with a function yielding a promise, so that one can call whenDOMContentLoaded().then(. . .)
*/


function whenDOMContentLoaded(){
    return new Promise((resolve, reject) => {
        if (document.readyState != "loading") resolve("Ready state 1")
        document.addEventListener("DOMContentLoaded", (e) => {
            resolve("Event Listener")
        })
        if (document.readyState != "loading") resolve('Ready state 2')
    })
}


whenDOMContentLoaded().then((value) => {
    console.log(value)
    console.log("Done loading the DOM!")
})
