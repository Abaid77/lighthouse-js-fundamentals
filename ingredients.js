const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let k = 0; k < ingredients.length; k++) {
  console.log(ingredients[k]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let h = ingredients.length - 1; h >= 0; h--) {
  console.log(ingredients[h]);
}