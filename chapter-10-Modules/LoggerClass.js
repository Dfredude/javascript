export default class Logger{
    static THRESHOLDS = {
        NONE : 0,
        LOW : 10,
        MEDIUM : 100,
        HIGH : 1000
    }
    static #threshold = this.THRESHOLDS.MEDIUM

    static get threshold(){
        return this.#threshold
    }

    static set threshold(threshold){
        this.#threshold = threshold
    }

    static logMessage(message){
        if (message.length > this.#threshold) console.log(message)
        else throw new Error("Message doesn't meet the threshold requirement.")
    }
}