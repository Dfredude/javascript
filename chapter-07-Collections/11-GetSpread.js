function getSpread(arr){
    const [min, max] = arr.reduce((prev, curr) => {
        if (curr < prev[0]) prev[0] = curr
        else if (curr > prev[1]) prev[1] = curr
        return prev
    }, [arr[0], arr[1]])
    return max - min
}

console.log(getSpread([3, 1, 9, 28, 30]))

