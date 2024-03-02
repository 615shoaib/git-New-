// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to divide two numbers
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero!";
    }
    return num1 / num2;
  }
  
  // Example calculations
  let resultAdd = add(5, 3);
  let resultSubtract = subtract(10, 4);
  let resultMultiply = multiply(6, 7);
  let resultDivide = divide(20, 5);
  
  console.log("Addition:", resultAdd);
  console.log("Subtraction:", resultSubtract);
  console.log("Multiplication:", resultMultiply);
  console.log("Division:", resultDivide);
  