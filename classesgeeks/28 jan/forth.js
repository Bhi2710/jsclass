//Enter the reverse of number.
/*
var i = prompt("enter the number")
i = parseInt(i);
count = i;

while(count>=1){
    console.log(count);
    count--;
}

// Use of for loop
*/

var i = prompt("enter the number")
i = parseInt(i);
count = i;
var a = [];

for(var count=i;count>=0;count--){
    console.log(count);
    a.push(count);
}
console.log(a[0] + " is max");


