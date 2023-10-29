/*
Homework

1. **Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on. (if this does not make sense please refer back to the recording)**

2. **Write a conditional statement that prints whether the phone being used is an Iphone or an android**

3. **Write a switch case that checks if the operation is a math operation (+,-,*,/) if the options is any of the options given it should give me the result of 2 variables created above the switch case. For example. math operation is * and the variables are 250 & 10 then the answer should log 2500

*/


//Q1

var name = "Tasleema"
console.log(name.toLowerCase())

if(name.toLowerCase()==="tasleema"){
    console.log("welcome tasleema")
} else {
    console.log("sorry, I do not recognise you")
}



var nameTwo = "tasleema"
console.log(nameTwo.toUpperCase())

if(nameTwo.toUpperCase()==="TASLEEMA"){
    console.log("welcome Tasleema")
} else {
    console.log("sorry, I do not recognise you")
}



//Q2
var device = "Iphone" 


//e.g. one 

if (device === "Iphone"){
    console.log("IOS update required")
} else {
    console.log("This device is not compatible")
}

//e.g. two 

if (device === "Android"){
    console.log("IOS update required")
} else {
    console.log("This device is not compatible")
}



//Q3


let operation = '*'; 
let variable1 = 250;
let variable2 = 10; 

//let result;

switch (operation) {
  case '+':
    console.log(variable1 + variable2);
    break;
  case '-':
    console.log(variable1 - variable2);
    break;
  case '*':
     console.log(variable1 * variable2);
    break;
  case '/':
    console.log(variable1 / variable2);
    break;
  default:
    console.log('Invalid operation');
}

//console.log(`Result of ${variable1} ${operation} ${variable2} is: ${result}`);



//addition

operation = '+'

switch (operation) {
    case '+':
      console.log(variable1 + variable2);
      break;
    case '-':
      console.log(variable1 - variable2);
      break;
    case '*':
       console.log(variable1 * variable2);
      break;
    case '/':
      console.log(variable1 / variable2);
      break;
    default:
      console.log('Invalid operation');
  }



//subtraction

  operation = '-'

  switch (operation) {
    case '+':
      console.log(variable1 + variable2);
      break;
    case '-':
      console.log(variable1 - variable2);
      break;
    case '*':
       console.log(variable1 * variable2);
      break;
    case '/':
      console.log(variable1 / variable2);
      break;
    default:
      console.log('Invalid operation');
  }





  //division

  operation = '/'

  switch (operation) {
    case '+':
      console.log(variable1 + variable2);
      break;
    case '-':
      console.log(variable1 - variable2);
      break;
    case '*':
       console.log(variable1 * variable2);
      break;
    case '/':
      console.log(variable1 / variable2);
      break;
    default:
      console.log('Invalid operation');
  }