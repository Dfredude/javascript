var myObject = { name: 'myObject' };

[1,2].forEach((item) => { 
  console.log(item);                     // 1, 2
  console.log(myObject === myObject, myObject);  // true  {name: "myObject"}
})