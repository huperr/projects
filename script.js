//time to code!
const display = document.getElementById("input"); //the result

//function time >:D

function press(input) {
  if (display.value === "0") { //this prevent u from doing 07 or smth similar
    display.value += input; //this thing put a number or a character into the display text
  } else {
    display.value += input; 
  }
}
function clear() {
  display.value = ""
}
function calculate() {
  try {
    display.value = eval(display.value)
  } catch {
    display.value = "Error :("
  } 
}
