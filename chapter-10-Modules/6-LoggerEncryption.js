/*
As an example of a circular dependency between modules,
repeat the preceding exercise, 
but provide an option to encrypt the logs in the logging module 
*/

import LoggerEncryption from "./LoggerEncryption.js"

const logger = LoggerEncryption
logger.threshold = logger.THRESHOLDS.NONE
logger.encrypt = true;

logger.logMessage("Hello")




