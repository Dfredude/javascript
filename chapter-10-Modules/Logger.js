

const THRESHOLDS = {
    NONE : 0,
    LOW : 10,
    MEDIUM : 100,
    HIGH : 1000
}

let threshold = THRESHOLDS.LOW

function logMessage(message){
    if (message.length > threshold) console.log(message)
    else throw new Error("Message doesn't meet the threshold requirement.")
}

const getThreshold = () => threshold;
const SetThreshold = ( level ) => { threshold = level };

export default{
    THRESHOLDS,
    logMessage,
    getThreshold,
    SetThreshold
}