/* Implement a simple encryption module that uses a Caesar Cipher  
(adding a constant to each code point). 
Use the logging module from one of the preceding exercises to log all calls to decrypt.
*/

import CaeserCipher from './CaesarCipher.js'

const c = new CaeserCipher()

let message = c.encrypt("Fred")

c.decrypt(message)




