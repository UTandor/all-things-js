const evaluateGame = () => {
  const moves = ["rock", "paper", "scissor"];

  const playerMove = document.getElementById("input").value;
  const aiMove = moves[Math.random(0, moves.length - 1)];

  switch (playerMove) {
    case "rock":
      switch (aiMove) {
        case "rock":
          return "Draw";
        case "scissor":
          return "AI Lost";
        case "paper":
          return "AI Won";
      }
      break;

    case "paper":
      switch (aiMove) {
        case "paper":
          return "Draw";
        case "rock":
          return "AI Lost";
        case "scissor":
          return "AI Won";
      }
      break;

    case "scissor":
      switch (aiMove) {
        case "scissor":
          return "Draw";
        case "paper":
          return "AI Lost";
        case "rock":
          return "AI Won";
      }
      break;

    default:
      break;
  }
};

const playGame = () => {
  console.log(evaluateGame());
};
