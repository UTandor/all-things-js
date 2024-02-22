const result = document.createElement("p");
const evaluateGame = () => {
  const moves = ["rock", "paper", "scissor"];

  const playerMove = document.getElementById("input").value;
  const aiMove = moves[Math.floor(Math.random() * moves.length)];
  let response = "";

  switch (playerMove) {
    case "rock":
      switch (aiMove) {
        case "rock":
          response = "Draw";
          break;
        case "scissor":
          response = "AI Lost";
          break;
        case "paper":
          response = "AI Won";
          break;
      }
      break;

    case "paper":
      switch (aiMove) {
        case "paper":
          response = "Draw";
          break;
        case "rock":
          response = "AI Lost";
          break;
        case "scissor":
          response = "AI Won";
          break;
      }
      break;

    case "scissor":
      switch (aiMove) {
        case "scissor":
          response = "Draw";
          break;
        case "paper":
          response = "AI Lost";
          break;
        case "rock":
          response = "AI Won";
          break;
      }
      break;
  }
  return { response, aiMove };
};

const playGame = () => {
  result.innerHTML = 'Loading...'

  const { response, aiMove } = evaluateGame();
  setTimeout(() => {

    result.innerHTML =
      `<strong>${response}</strong>` +
      " because the AI played: " +
      `<strong>${aiMove}</strong>`;
  }, 500);
};

document.body.appendChild(result);
