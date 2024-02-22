const buttons = [
  { id: "clear", name: "AC", content: "🆑" },
  { id: "plus-minus", name: "**", content: "⬛" },
  { id: "erase", name: "C", content: "🔄" },
  { id: "add", name: "+", content: "➕" },
  { id: "one", name: "1", content: "1️⃣" },
  { id: "two", name: "2", content: "2️⃣" },
  { id: "three", name: "3", content: "3️⃣" },
  { id: "subtract", name: "-", content: "➖" },
  { id: "four", name: "4", content: "4️⃣" },
  { id: "five", name: "5", content: "5️⃣" },
  { id: "six", name: "6", content: "6️⃣" },
  { id: "multiply", name: "*", content: "✖️" },
  { id: "seven", name: "7", content: "7️⃣" },
  { id: "eight", name: "8", content: "8️⃣" },
  { id: "nine", name: "9", content: "9️⃣" },
  { id: "divide", name: "/", content: "➗" },
  { id: "zero", name: "0", content: "0️⃣" },
  { id: "equals", name: "=", content: "➡️" },
  { id: "decimal", name: ".", content: "🔵" },
];

const container = document.getElementById("container");
let formula = "";

const changeFormula = () => {
  console.log(formula);
  const answer = document.getElementById("answer");
  answer.innerHTML = formula;
};

const calculateAnswer = () => {
  try {
    console.log(formula)
    formula = eval(formula);
    console.log(formula)
    return formula
  } catch (e) {
    console.error(e);
    return "Error"
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  const button = document.createElement("button");
  button.innerHTML = buttons[i].content;
  button.id = buttons[i].id;
  button.name = buttons[i].name;
  button.classList = "button";

  switch (button.name) {
    case "AC":
      button.addEventListener("click", () => {
        formula = "";
        changeFormula(button.name);
      });
      break;
    case "C":
      button.addEventListener("click", () => {
        formula = formula.slice(0, -1);
        changeFormula(button.name);
      });
      break;
    case "=":
      button.addEventListener("click", () => {
        formula = calculateAnswer();
        changeFormula(button.name);
      });
      break;
    default:
      button.addEventListener("click", () => {
        formula += button.name;
        changeFormula(button.name);
      });
  }

  container.appendChild(button);
}
