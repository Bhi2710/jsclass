// take a number from user and print the max value..

var i = prompt("enter the number")
i = parseInt(i);
count = i;
var a = [];

for(var count=i;count>=0;count--){
    console.log(count);
    a.push(count);
}
console.log(a[0] + " is max");