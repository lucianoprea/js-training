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
  // read the input value
  let input = getInputValue(this);
  // TODO: calculate the output somehow
  let output = '';
  // set the output value
  setOutputValue(this, output);
};

let fibonacci = function() {
  // read the input value
  let input = getInputValue(this);
  // TODO: calculate the output somehow
  let output = '';
  // set the output value
  setOutputValue(this, output);
};

// Register click handlers

// NOTE: showAlert(); or showAlert(param); will NOT work here.
// Must be a reference to a function name, not a function call.
document.getElementById('leapYearBtn').onclick = fibonacci;
document.getElementById('fibonacciBtn').onclick = leapYear;
// TODO: add the other two button click handlers
