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
console.log(nodeArr)
let number
let firstNumArr = []

// for (var i = 0; i < nodeArr)


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

  } else {
    console.log('didn\'t click a number')

    let operator = e.target.innerHTML
    console.log(operator)

  }

}

let leftPanel = document.querySelector('.leftPanel')
let operators = document.querySelector('.operators')
let equalSign = document.querySelector('.equal')
// console.log(numberButtons)

// let allButtons = document.querySelector('.buttons')
leftPanel.addEventListener('click', selectCalc)


// create a function to determine the first numbers

// create a function to determine the second number

// When user clicks on a number - that number gets stored as a variable... firstNum
  // the value is revealed in the solution box on the UI

// When user clicks on a math operator, the operation method is stored in memory
  // the value is revealed in the solution box on the UI

// When the user clicks on the second number, that number get stored in a second variable... secondNum


// When the user presses the equal sign button, the math operation is calculated
  // the value is revealed in the solution box on the UI
