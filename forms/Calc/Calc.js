   
function calculate(num1, num2) {
   let functionAnswer = num1 + num2
   return functionAnswer;
}

let num1 = Number(prompt('Enter your first number:'))
let num2 = Number(prompt('Enter your second number:'))


let summedNumbers = calculate(num1, num2)
console.log(`The answer is ${summedNumbers}`)