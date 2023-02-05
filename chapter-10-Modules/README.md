# Chapter 10 - Modules

## 8. Default vs Named **import**

### What is the difference between

```javascript 
import Cipher from './modules/caeser.mjs'
```
> It's a **Default import**. Will import the module's default feature.
### and ...
```javascript
import { Cipher } from './modules/caeser.mjs'
```
> It is a **named import**. Will import the feature by its original name in the module.

## 9. Default vs Named **Export**

Explain the difference between

```js
export { encrypt, Cipher, DEFAULT_KEY }
```
> It's a normal export by name.

### and
```js
export default { encrypt, Cipher, DEFAULT_KEY}
```

> It's a **default** export. The object exported is an object containing the variables as properties. Like so:

```js
{
    encrypt: encrypt,
    Cipher: Cipher,
    DEFAULT_KEY, DEFAULT_KEY
}
```

> This works because the default export doesn't require a name for the feature to be exported. So it takes whatever expression is on the right and exports it.



## 10

// Which one of the following are valid JavaScript?

```js
export function default(s, key) { ... } // INVALID, default is a reserved keyword
```

```js
export default function (s, key){ ... } // VALID. default can take an anonymus function
```

```js
export const default = (s, key) => { ... } // INVALID, default is a reserved keyword
```

```js
export default (s, key) => { ... } // VALID. default can take an anonymus function
```

### 12 - Module Dependency Redundancy
> TODO: Understand why **re-exporting works**

Of course, the issue in the preceding exercise could have been easily avoided by not using inheritance, or by placing all classes into one module. 
In a larger system those alternatives may not be feasible. In this exercise, keep each class in its own module and provide a facade module `tree.mjs` that re-exports all three modules. In all modules, import from `'./tree.mjs`, not the individual modules. Why does this solve the issue?
