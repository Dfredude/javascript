import Logger from "./Logger.js"
const LEVELS = Logger.THRESHOLDS

console.log("Current threshold: ", Logger.getThreshold())
Logger.logMessage("Hello, I hope this works fine!")

Logger.SetThreshold(LEVELS.NONE)
Logger.logMessage("Bye")