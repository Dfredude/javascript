function f(a=1, b=2){ console.log(`a=${a}, b=${b}`) }
f()

// Unable to call any of these due to strict mode. It runs fine in the browser though.
f(a=5)
f(a=7, b=10)
f(b=10, a=7)