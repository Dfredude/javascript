// • The Java library has a useful concept of a "message bundle" where you can look up localized messages by locale,
// • there's a map of keys to translated messages.

const message_bundle = {
    de: {
        greeting: "Hallo",
        farewell: "Auf Wiedersehen"
    },
    'de-CH': {
        greeting: "Gruezi"
    },
    fr: {
        greeting: "Bonjour",
        farewell: "Au revoir"
    }
}

// 1. I'm looking for a message, first look at the most specific locale, then move to more gentle ones. 
// 2. Support overrides for more specialized locales. 
// For example, when looking up a message with key greeting greeting in parentheses and the locale 'de-CH", 
// locate "Gruezi", but for farewell, fall back to 'de.

function getMessage(locale_tag, message){
    return message_bundle[locale_tag][message] ?? message_bundle[locale_tag.split('-')[0]][message]
}

console.log(getMessage('de-CH', 'greeting'))
