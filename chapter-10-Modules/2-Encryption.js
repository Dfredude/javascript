/* 
Find a JavaScript library for encryption. 
Write a program that imports the library as an ECMAScript module and encrypts a message 
then decrypts it. 
*/

// Importing good practice commented out, just for learning purposes
// import CryptoJS from "crypto-js"
import CryptoJS from "./node_modules/crypto-js/crypto-js.js"

const ciphertext = CryptoJS.AES.encrypt("My secret", "key").toString()
console.log("Encrypted text: " + ciphertext)

const bytes = CryptoJS.AES.decrypt(ciphertext, 'key')

console.log("Bytes decoded: " + bytes)

const original_text = bytes.toString(CryptoJS.enc.Utf8)

console.log("Original text: " + original_text)


