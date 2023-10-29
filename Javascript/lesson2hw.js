//Homework for lesson 2 on javascript


//1. **Using string concatenation add two different strings together and print this off.**

console.log("Using string concatenation add two different strings together "+ "and print this off")



//2. **Using variables create a variable for a number, a string. Then print each of these variables.**

var number = "12"
var string = "hello"

console.log(number)
console.log(string)
console.log(string+" "+number)



//3. **Using string concatenation in javascript combine 3 different variables and prints it off. I.e variable for name age and date of birth will result in “my name is John I am 35 years old and I was born in 1988”. (you cannot use name age and dob as your variables).**

var preference="colours"
let colour="pink"
const feeling="happy"

console.log("I really love " + preference + " my favourite one is " + colour + " it makes me feel " + feeling)


// 4. **Create a variable that is printed off then changed further down the script and printed.**

colour = "purple"

console.log("I really love " + preference + " my favourite one is " + colour + " it makes me feel " + feeling)




//5. **Print off the datatypes for a number variable & string variable.**

var numberData = 25
var stringData = "string"

console.log(numberData+ " "+ stringData)





//6. **Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).


var characterDC = "Aquaman"
var characterMarvel = "Ironman"


//e.g. one 


if (characterDC === "Aquaman"){
    console.log("welcome to the sea " + characterDC)
} else {
    console.log("intruder alert: access denied")
}


//e.g. two 

if (characterMarvel === "Aquaman"){
    console.log("welcome to the sea " + characterDC)
} else if(characterMarvel==="Ironman"){
    console.log("welcome home Tony Stark")
} else {
    console.log("intruder alert: access denied")
}


//e.g. three


if (characterMarvel === "Aquaman"){
    console.log("welcome to the sea " + characterDC)
} else if(characterDC==="Ironman"){
    console.log("welcome home Tony Stark")
} else {
    console.log("intruder alert: access denied")
}
