// ARRAYS

// Arrays are containers that hold lists of items of various dataTypes 

let list = [     'item 1', 'item 2', 'item 3']
//   (1)  (2)      (3)

//1-name of the array
//2-the array is always inside of square brackets
//3-each item, regardless of datatype, is separated by commas

console.log(list[1])

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']]

console.log (students instanceof Array)

console.log(`Hello ${(students[6][2])} how are you today?`)

//Populating 

let food = ['spaghetti', 'linguini', 'chicken wings', 'pizza', 'popcorn'];

food.push('tacos'); //adds item to end
food.splice(1, 1, 'bananas') //where it adds the item, how many it removes, what it's adding
food.splice(2, 0, 'sweet potato pie')
food.pop(); //removes last item
food.shift() //removes first item
food.unshift('fruit snacks') //adds item to beginning

for (pasta of food) {
    console.log(pasta)
};


