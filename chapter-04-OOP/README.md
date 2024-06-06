# Chapter 4 - Object Oriented Programming

> 3 ways to create an object

### 1. Object literal

```js
{
    name: "value", // A property
    getName() { return this.name } // A method
}
```

### 2. Constructing a function object

```js
function Point(x, y) {
    this.name = "Point"
    this.x = x
    this.y = y
}

const point = new Point(0, 0)

// point Will look like this
{
    name: "Point",
    x: 0,
    y: 0
}
```

### 3. Class instantiation

```js
class Point{
  name = "Point"
  constructor(x, y){
    this.x = x
    this.y = y
  }
}

const point = new Point(0, 0)

// point Will look like this
{
    name: "Point",
    x: 0,
    y: 0
}
```