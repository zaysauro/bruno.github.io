let display = document.getElementById("display");
let current = "";

function append(value) {
  if (current === "0") current = "";
  current += value;
  display.textContent = current;
}

function clearDisplay() {
  current = "";
  display.textContent = "0";
}

function calculate() {
  try {
    current = eval(current).toString();
    display.textContent = current;
  } catch {
    display.textContent = "Error";
    current = "";
  }
}
