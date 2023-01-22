/* Provide a function that is similar to that in section 9.1, 
"Concurrent tasks in JavaScript" (page185). Return a promise so  that one can chain the calls
*/

const addImage = (url, element) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.responseType = 'blob'

        request.addEventListener('load', () => {
            if (request.status == 200){
                const blob = new Blob([request.response], { type: 'image/png'})
                const img = document.createElement('img')
                img.height = 240
                img.src = URL.createObjectURL(blob)
                element.appendChild(img)
                resolve(img)
            } else {
                console.error(`${request.status}: ${request.statusText}`)
            }
        })
        request.addEventListener('error', event => console.error('Network error'))
        request.send()
    })
    
}

const images_div = document.getElementById("images")

addImage('./images/hanafuda-1.png', images_div)
.then(() => addImage('./images/hanafuda-2.png', images_div))
.then(() => addImage('./images/hanafuda-3.png', images_div))
.then(() => addImage('./images/hanafuda-4.png', images_div))