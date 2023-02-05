import Logger from "./LoggerClass"

Logger.threshold = Logger.THRESHOLDS.NONE

export default function CaesarCipher(){
    this.encrypt = (s) => {
        return [...s].map((c) => String.fromCodePoint(c.codePointAt(0)+10)).join('')
    }    

    this.decrypt = (s) => {
        Logger.logMessage(`Decrypting ${s}...`)
        return [...s].map((c) => String.fromCodePoint(c.codePointAt(0)-10)).join('')
    }
}