// DOM handling functions
let getInputValue = function(button, selector = '.input') {
  let inputGroup = button.closest('.input-group');
  return inputGroup.querySelector(selector).value;
};
let setOutputValue = function(button, out, selector = '.output') {
  let inputGroup = button.closest('.input-group');
  inputGroup.querySelector(selector).value = out;
};

// algorithm functions
let leapYear = function() {
  setOutputValue(this, getInputValue(this));
};
let fibonacci = function() {
  setOutputValue(this, getInputValue(this));
};

// Register click handlers

// NOTE: showAlert(); or showAlert(param); will NOT work here.
// Must be a reference to a function name, not a function call.
document.getElementById('leapYearBtn').onclick = leapYear;
document.getElementById('fibonacciBtn').onclick = fibonacci;
