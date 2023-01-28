/*
Use the fetch API to obtain the HTML of a (CORS-friendly) web page. 
Search all image URLs and load each image
*/
// import fetch from "node-fetch"

const website = "https://simplelocalize.io/blog/posts/what-is-cors/" // Can't fetch from browser due to CORS

fetch(website, {
    headers: {
        "Content-Type": "image/png"
    }
})
.then((res) => {
    return res.text()
})
.then((html) => {
    const imgRegex = /<img\s+[^>]*src=("|')([^"']+)\1/g
    const matches = html.match(imgRegex)
    const urls  = matches.map((val) => {
        return val.match(/src=("|')([^"']+)\1/)[0].split('"')[1]
    })
    return urls
})


