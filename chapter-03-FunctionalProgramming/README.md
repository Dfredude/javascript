# Best of excercises

## 06 - Named Parameters
- In the browser console, we start by declaring a function
```javascript
function f(a=1, b=2){ console.log(`a=${a}, b=${b}`) }
```
- Calling the function normally
```javascript
f()
```
```
>> a=1, b=2
```
- Using named parameters apparently
```javascript
    f(a=7, b=10)
```
```
>> a=7, b=10
```
- Trying it one more time
```javascript
f(b=10, a=7)
```
```
>> a=10, b=7
```
- The explanation for this, is that named parameters in javascript don't exist. These junks of code were defining a variable within the method's call, and the ***method*** was simply ***using*** the ***value of that defined*** variable.
