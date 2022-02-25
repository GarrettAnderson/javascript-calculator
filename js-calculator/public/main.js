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

let isCalculating = false
let numbersHTML = document.querySelectorAll('#number')
console.log(numbersHTML)
const nodeArr = Array.from(numbersHTML)
console.log(nodeArr)
let number
let firstNumArr = []
let secondNumArr = []
let operand
let result

// for (var i = 0; i < nodeArr)


function calcNums (e) {

  console.log('num is clicked')
  // numbers = nodeArr.map((a, b) => {
  //   // Print the numbers to the console
  //   console.log(a, b)
  // number == a.innerHTML
  // })
  number = parseInt(e.target.innerHTML)
  console.log(Number.isInteger(e.target.innerHTML))
  console.log(number)

  // if the operator has not been set, saved in a variable then
    // it is assumed the first number is only to be chosen.
    // if the operator button is selected than the else statement will trigger
    // to find the second num

if (operand == null) {
  if (Number.isInteger(number) == true || e.target.innerHTML == '.') {
      console.log('clicked a number')
      console.log(e.target.innerHTML)

      firstNumArr.push(e.target.innerHTML)
      console.log(firstNumArr)

    } else {
      console.log('didn\'t click a number')

      let clearBtn = e.target.innerHTML
      console.log(clearBtn)

      firstNumArr = []
      operand = null

    }
  } else {
    // the operand has been chosen and now move on to find the second number
    console.log('operand has been chosen: ' + operand)

    secondNumArr.push(e.target.innerHTML)

      if (e.target.innerHTML == 'C') {
          firstNumArr = []
          secondNumArr = []
          operand = null
      }

      console.log('first num is: ', firstNumArr)
      console.log('second num is: ', secondNumArr)

  }

}


function calcOperator (e) {
  console.log('finding the operator')
  operand = e.target.innerHTML
  console.log(operand)
}

function calcSolution () {

// contract number arrays back to numbers

  console.log(firstNumArr.join(''))
  console.log(secondNumArr.join(''))

  let firstNum = parseInt(firstNumArr.join(''))
  let secondNum = parseInt(secondNumArr.join(''))


  if (operand == '+') {
      result = firstNum + secondNum
      console.log(result)
  } else if (operand == '-') {
    result = firstNum - secondNum
    console.log(result)
  } else if (operand == '*') {
    result = firstNum * secondNum
    console.log(result)
  } else {
    result = firstNum / secondNum
    console.log(result)
  }

}


let leftPanel = document.querySelector('.leftPanel')
let operators = document.querySelector('.operators')
let equalSign = document.querySelector('.equal')
// console.log(numberButtons)

// let allButtons = document.querySelector('.buttons')
leftPanel.addEventListener('click', calcNums)
operators.addEventListener('click', calcOperator)
equalSign.addEventListener('click', calcSolution)


// create a function to determine the first numbers

// create a function to determine the second number

// When user clicks on a number - that number gets stored as a variable... firstNum
  // the value is revealed in the solution box on the UI

// When user clicks on a math operator, the operation method is stored in memory
  // the value is revealed in the solution box on the UI

// When the user clicks on the second number, that number get stored in a second variable... secondNum


// When the user presses the equal sign button, the math operation is calculated
  // the value is revealed in the solution box on the UI
