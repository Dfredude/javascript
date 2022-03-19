class Random {
    static nextDouble(low, high){
        return low + (Math.random()*(high-low))
    }

    static nextInt(low, high){
        return low + (Math.floor(Math.random()*(high-low)))
    }
}

console.log(Random.nextInt(5, 10));