const buttons = [
  { id: "clear", name: "C" },
  { id: "erase", name: "E" },
  { id: "zero", name: "0" },
  { id: "one", name: "1" },
  { id: "two", name: "2" },
  { id: "three", name: "3" },
  { id: "four", name: "4" },
  { id: "five", name: "5" },
  { id: "six", name: "6" },
  { id: "seven", name: "7" },
  { id: "eight", name: "8" },
  { id: "nine", name: "9" },
  { id: "add", name: "+" },
  { id: "subtract", name: "-" },
  { id: "multiply", name: "*" },
  { id: "divide", name: "/" },
  { id: "equals", name: "=" },
  { id: "decimal", name: "." },
];

const container = document.getElementById("container");

for (let i = 0; i < buttons.length; i += 1) {
  const button = document.createElement("button");
  button.innerHTML = buttons[i].name;
  button.id = buttons[i].name;
  button.name = buttons[i].id;
  button.classList = "button";

  container.appendChild(button);
}

console.log(buttons[0].id);
console.log(buttons[0].name);
