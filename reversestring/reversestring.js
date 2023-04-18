// Lets turn the string into an array and we do that with the split method.
// split('');
// reverse()
// join('')
// So we take a string, we turn it into an array, we reverse the array, then we turn it back into a string. This is the most common solution you'll see for reverse string

//SOLUTION 1:
function reverseString(str) {
  return str.split('').reverse().join('');
}

// So for this one we're going to loop through the string
// step 1: let's create a variable called reversed, basically this is going to hold our final string that's going to be returned
// step 2: now we want to loop through `for(let char of str)`
// step 3: take the reversed variable and set it equal to the character(char) + reverseString
// Basically we're appending it on so it should be reversed.

//SOLUTION 2:
// function reverseString(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// use reduce = it's a high order array method so it takes in a function
// We start with an empty string, we loop through, and then we get the character

//SOLUTION 3:
// function reverseString(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverseString;