/*
The sample program in Section 9.1, "Concurrent Tasks in JavaScript" (page 185), 
may not load the images in the correct order. How can you modify it without using
futures so that the images are always appended in the correct order, no matter when they arrive?
*/
const images = ["./images/hanafuda-1.png", "./images/hanafuda-2.png", "./images/hanafuda-3.png", "./images/hanafuda-4.png"]

// Sample program
const images_container_element = document.getElementById("images")
const addImage = (url, element, callback) => {
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
        } else {
            console.error(`${request.status}: ${request.statusText}`)
        }
    })
    request.addEventListener('error', event => console.error('Network error'))
    request.send()
}
// Order of appending is not guaranteed
addImage(images[0], images_container_element)
addImage(images[1], images_container_element)
addImage(images[2], images_container_element)
addImage(images[3], images_container_element)

// Fixed version. Appending order is guaranteed
const images_container_element_2 = document.getElementById("images-2")
const addImages = (arr, element, callback) => {
    if (arr.length > 0){
        const url = arr[0]
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.responseType = 'blob'

        request.addEventListener('load', () => {
            if (request.status == 200){
                console.log(request)
                const blob = new Blob([request.response], { type: 'image/png'})
                const img = document.createElement('img')
                img.height = 240
                img.src = URL.createObjectURL(blob)
                element.appendChild(img)
                addImages(arr.slice(1), element)
            } else {
                console.error(`${request.status}: ${request.statusText}`)
            }
        })
        request.addEventListener('error', event => console.error(`Network error: ${event}`))
        request.send()
        return request
    }
}

addImages(images, images_container_element_2)

