// var i points to the same data across al iteration scopes. Therefore after doing calculations 

for (var i=0; i<9; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}

for (let i=0; i<9; i++){
    setTimeout(() => {
        console.log(i);
    }, 10000 + (1000 * i));
}