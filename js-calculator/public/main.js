// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }
//
// document.addEventListener('DOMContentLoaded', main)


// Collect the numbers and set them to a variable - an array


// PEDAC

//

let numbersHTML = document.querySelectorAll('#number')
console.log(numbersHTML)
const nodeArr = Array.from(numbersHTML)
let number
let firstNumArr = []

function selectCalc (e) {
  console.log('num is clicked')
  // numbers = nodeArr.map((a, b) => {
  //   // Print the numbers to the console
  //   console.log(a, b)
  // number == a.innerHTML
  // })
  number = parseInt(e.target.innerHTML)
  console.log(Number.isInteger(e.target.innerHTML))
  console.log(number)

  if (Number.isInteger(number) == true || e.target.innerHTML == '.') {
    console.log('clicked a number')
    console.log(e.target.innerHTML)

    firstNumArr.push(number)

  } else if (e.target.innerHTML !== 'C' && e.targt.innerHTML !== '='){
    console.log('didn\'t click a number')
  }


}

let leftPanel = document.querySelector('.leftPanel')
// console.log(numberButtons)

// let allButtons = document.querySelector('.buttons')
leftPanel.addEventListener('click',selectCalc)


// create a function to determine the first numbers

// create a function to determine the second number

// When user clicks on a number - that number gets stored as a variable... firstNum
  // the value is revealed in the solution box on the UI

// When user clicks on a math operator, the operation method is stored in memory
  // the value is revealed in the solution box on the UI

// When the user clicks on the second number, that number get stored in a second variable... secondNum


// When the user presses the equal sign button, the math operation is calculated
  // the value is revealed in the solution box on the UI
