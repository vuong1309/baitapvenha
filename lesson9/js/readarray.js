let arrFood = ["Spring roll", "Summer roll", "Barbecue", "Pho", "Fried Rice", "Fish soup", "Fish cake"];
//print log & table

//print log
// console.log(arrFood);

//print table
// console.table(arrFood);

//*******************************

//ask customer the number of food and print the food name
let i = parseFloat(prompt(`Please choose the number of your meal?`));
if (i < 1 || i > arrFood.length) {
    console.log(`Please choose again!`);
} else {
    console.log(`The name of your meal is:`, arrFood[i - 1]);
}