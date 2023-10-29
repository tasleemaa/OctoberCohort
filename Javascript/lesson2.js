//saturday 21st october 2023

//string concatenation = joining two strings together 
//+ sign merges strings together wihtout manually adding a space between 

var welcomeMessage = "hello"
let introMessage = "how are you"
const name = "Tasleema"
const surname = "Begum"

console.log(welcomeMessage+ " " +introMessage)
console.log("hello "+"welcome")
console.log("hello " +"25")

//string interpolation = interperates strings together via a string symbol 

/* `` this is the only string that can apply a variable without a plus symbol
e.g.
console.log(`hello welcome to lesson 2 ${variable})*/

console.log(`hello welcome to lesson 2 ${name}`)

//a single = means to assign something e.g. const name = "tasleema"

//a double == is used for comparison, meaning are these two variable loosely equal to each other 

//a  triple === is used for comparison, meaning are these two variable strictly equal to each other 

//sticking to the triple === sign is the best way to avoid mistakes in comparison 

//0 == false
//1 == true 

// if i enter 1===true, it would come back as false as 1 is a number and true is a bolean 

/* && (AND)
|| (OR)

&& means both varibales have to applied for the code to work and
|| means one or the other has to apply for the code to work 
this is pivotal when using conditional statements */

//conditional statements - a statement that says do something if this condition is met 

/* e.g. 
If (){
    execute this line
} else{
    execute this line 
} */

if (name==="Tasleema"){
    console.log(welcomeMessage + " "+introMessage + " " + name)
} else {
    console.log("sorry")
}




if (name==="Tasleema" && surname ==="Begum"){
    console.log(welcomeMessage + " "+introMessage + " " + name)
} else {
    console.log("sorry")
}




if (name){
    console.log(welcomeMessage + " "+introMessage + " " + name)
} else {
    console.log("sorry")
}



if (typeof name===12){
    console.log(welcomeMessage + " "+introMessage + " " + name)
} else if(name==="Tasleema"){
    console.log("hey! i know you")
}
    else {
    console.log("sorry")
}
