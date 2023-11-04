/* HOMWEWORK ON ARRAYS
1.From you understanding of array create an array with 15 items inside**
2. From the array just created in the above question remove the last item in the array. You cannot alter the original array.**
3. Add an item to the end of the list. Cannot alter the original array**
4. Find the position of the first item, middle item and last item of the list and print them off separately.**
5. Modify 3 items in the array and print them off
*/

//Q1

var householdItems = ["fridge", "sofa", "television", "bed", "wardrobe", "cupboard", "tables", "cutlery", "pillows", "duvet", "chairs", "heater", "remote", "blanket", "glass"];
console.log(householdItems.length)


//Q2

householdItems.pop()
console.log(householdItems)



//Q3

householdItems.push("iron")
console.log(householdItems)



//Q4


console.log(householdItems[0])
console.log(householdItems[8])
console.log(householdItems[householdItems.length-1])




//Q5

householdItems[5] = "pliers"
householdItems[9] = "hammer"
householdItems[11] = "plates"

console.log(householdItems)