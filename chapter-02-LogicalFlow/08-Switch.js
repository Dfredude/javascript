let nums = ["Cero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]

let num = 5

//Using Switch statement, needs a break in each one, to avoid execution of multiple cases.
console.log("----Switch Statement----");
switch (num) {
    case 0: console.log("Cero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
}


//Easier and cleaner way to do it
console.log("----Array indexing----");
console.log(nums[num]);


console.log("----Reverse Conversion----");
let rev = 0;
num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);
