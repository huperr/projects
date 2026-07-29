//time to code!
const display = document.getElementById("input"); //the result

//function time >:D

function press(input) {
  display.value += input; //this thing put a number or a character into the display text
}

function clear() {
  display.value = " ";
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch {
    display.value = "Error :("
  } 
}
