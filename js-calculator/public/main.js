// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }
//
// document.addEventListener('DOMContentLoaded', main)


// Collect the numbers and set them to a variable - an array

const numbers = document.querySelectorAll('#number')
console.log(Array.from(numbers))

for (number in numbers) {
  console.log(number)
}
