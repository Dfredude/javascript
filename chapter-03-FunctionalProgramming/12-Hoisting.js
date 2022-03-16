if (Math.random() < .5) {
    say('Hello')
    function say(greeting) {console.log(`${greeting}`)}
}

say('Goodbye') // On the browser it runs OK, here it throws an error