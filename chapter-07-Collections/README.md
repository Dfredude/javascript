# Exercises Chapter 7


1. Creating a **from** function. 
> What happens to keys whose numeric values are >= the length property?
#### They are discarded
> With properies that are not index properties?
#### They are discarded as well
2. Using `Array.of`
> Explain the advantage of using Array.of over Array
```javascript
Array.of(100) // Creates [100]
Array(100) // Creates an array of length 100
```
As you may see the Array constructor is not useful when used as a collector of arguments.

17. Weak Sets
Flag for **node** to be able to force garbage collection
```cmd
node --expose-gc
```
Like so:
```javascript
global.gc()
```
