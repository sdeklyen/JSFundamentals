// ITERATING

//forEach method executes a provided function once for each array element.

//forEach() has three arguments: currentValue, the index, and the entire array.
// currentValue = the current element being processed in the array 
//index = the index of the current element being processed 
// array = the array the forEach method was called upon

let food = ['spaghetti', 'linguini', 'chicken wings', 'pizza', 'popcorn']

food.forEach(f => {console.log(f)});

food.forEach((f, number) => {console.log(f, number)})

food.forEach((f, number, array) => {console.log(f, number, array)})

let movies = ['Climax', 'The Image Book', 'High Life', 'Midsommar', 'Us']
movies.push('The Souvenir')
movies.splice(4, 1, 'John Wick 3')
movies.forEach(films => {console.log(films)})