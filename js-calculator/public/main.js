// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }
//
// document.addEventListener('DOMContentLoaded', main)


// Collect the numbers and set them to a variable - an array


let numbersHTML = document.querySelectorAll('#number')
console.log(numbersHTML)
const nodeArr = Array.from(numbersHTML)
let numbers = nodeArr.map((a, b) => {

  // Print the numbers to the console
  console.log(a, b)
  return a.innerHTML

})

console.log(numbers)




function calcNums (c, d, e) {
  // c is the first num, d is the second num and e is the operand

  console.log('num is clicked')
}

let number =
numbers.addEventListener('click',calcNums)


// When user clicks on a number - that number gets stored as a variable... firstNum
  // the value is revealed in the solution box on the UI

// When user clicks on a math operator, the operation method is stored in memory
  // the value is revealed in the solution box on the UI

// When the user clicks on the second number, that number get stored in a second variable... secondNum


// When the user presses the equal sign button, the math operation is calculated
  // the value is revealed in the solution box on the UI
