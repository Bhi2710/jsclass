// Enter a string and count how many vowel in string..

var str = prompt("Enter any String: ");

var ArrStr = str.split("");
console.log("Given String by user is : " + str);
console.log(ArrStr);
var ctr = 0;
for (var i = 0; i < ArrStr.length; i = i + 1) {
   
    switch (ArrStr[i]) {
        case 'a':
        case 'A':
            ctr = ctr + 1;
            break;
        case 'e':
        case 'E':
            ctr = ctr + 1;
            break;
        case 'i':
        case 'I':
            ctr = ctr + 1;   
            break;
        case 'o':
        case 'O':
            ctr = ctr + 1;
            break;
        case 'u':
        case 'U':
            ctr = ctr + 1;
            break;
    }
}

console.log("Total vowels in Given String is : " + ctr);






//User enter the number check weather it is prime or not.

var a = prompt("enter the number");
a = parseInt(a);
count = 0;

if(isNaN(a)){
    alert("Please enter the valid number")
}else{
      for(i=1; i<=a; i=i+1){
          if(a % i == 0){
              count = count + 1;
          } 
      }      
      if(count==2){
         console.log("prime number");
      }else{
         console.log("not a prime");
}

}
