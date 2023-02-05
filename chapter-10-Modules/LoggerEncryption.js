import CaesarCipher from "./CaesarCipher.js"

export default class Logger{
    static THRESHOLDS = {
        NONE : 0,
        LOW : 10,
        MEDIUM : 100,
        HIGH : 1000
    }
    static #threshold = this.THRESHOLDS.MEDIUM
    static #encrypt = false;

    static get threshold(){
        return this.#threshold
    }

    static set threshold(threshold){
        this.#threshold = threshold
    }

    static get encrypt() {
        return this.#encrypt
    }

    static set encrypt(bool) {
        this.#encrypt = bool;
    }

    static logMessage(message){
        if (message.length > this.#threshold) {
            if (this.#encrypt) message = new CaesarCipher().encrypt(message)
            console.log(message)
        }
        else throw new Error("Message doesn't meet the threshold requirement.")
    }
}