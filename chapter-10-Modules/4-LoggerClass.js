// Repeat the proceeding exercise, 
// but export a single class as a default feature

import Logger from "./LoggerClass.js"

const LEVELS = Logger.THRESHOLDS

console.log("Current threshold: ", Logger.threshold)
Logger.logMessage("Hello, I hope this works fine!")

Logger.threshold = LEVELS.NONE
Logger.logMessage("Bye")