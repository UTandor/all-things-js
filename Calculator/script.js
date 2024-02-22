const buttons = [
  { id: "clear", name: "AC" },
  { id: "clear", name: "+/-" },
  { id: "erase", name: "C" },
  { id: "add", name: "+" },
  { id: "one", name: "1" },
  { id: "two", name: "2" },
  { id: "three", name: "3" },
  { id: "subtract", name: "-" },
  { id: "four", name: "4" },
  { id: "five", name: "5" },
  { id: "six", name: "6" },
  { id: "multiply", name: "*" },
  { id: "seven", name: "7" },
  { id: "eight", name: "8" },
  { id: "nine", name: "9" },
  { id: "divide", name: "/" },
  { id: "zero", name: "0" },
  { id: "equals", name: "=" },
  { id: "decimal", name: "." },
];

const container = document.getElementById("container");
let formula = "";

const changeFormula = (name) => {
  const answer = document.getElementById("answer");
  answer.innerHTML = name;
};

for (let i = 0; i < buttons.length; i += 1) {
  const button = document.createElement("button");
  button.innerHTML = buttons[i].name;
  button.id = buttons[i].id;
  button.name = buttons[i].name;
  button.classList = "button";
  button.addEventListener("click", () => changeFormula(button.name));

  container.appendChild(button);
}

console.log(buttons[0].id);
console.log(buttons[0].name);
