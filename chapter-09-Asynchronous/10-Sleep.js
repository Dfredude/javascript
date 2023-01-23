const sleep = (miliseconds) => new Promise((resolve) => {
    const start = new Date()
    const end = start.getTime() + miliseconds
    while (new Date().getTime() < end);
    resolve()
})

await sleep(10000) // 10 seconds