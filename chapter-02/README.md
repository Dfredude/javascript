
# Non-coding questions

## 1. What values are displayed for the following kind of statements on the web browser, or node.js?

### • An expression statement: 
```javascript
9*5
``` 
> `>> 45`

### • A variable declaration:
```javascript
let myStr = "Hello";
```
> `>> undefined`

### • A block statement with at least one statement inside
```javascript
{
    "".slice()
    let num = 5;
}
```
> `>> ..`

### • An empty block statement
```javascript
{}
```
> `>> ..`

### • A `do loop` that's executed at least once
```javascript
do {
    let lol = "test";
} while (false)
```
> `>> undefined`

### • A loop whose body's never executed
```javascript
while (false) {console.log("Never executed")}
```
> `>> undefined`

### • if statement
```javascript
if (true){
    console.log("Doing nothing")
}
```
> `>> Doing nothing`
>
> `>> undefined`

### Normal`Try statement`
```javascript
try {let myNum = 1 + 2} catch {console.log("Cannot add a 'Not a number'")}
```
> `>> undefined`

### Catching the `Try statement`
```javascript
try {let myNum = 1 + Nan} catch {console.log("Cannot add a 'Not a number'")}
```
> `>> Cannot add 'Not a number'`
> 
> `>> undefined`

