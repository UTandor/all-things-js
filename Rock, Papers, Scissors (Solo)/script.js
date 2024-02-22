const evaluateGame = () => {
  const moves = ["rock", "paper", "scissor"];

  const playerMove = document.getElementById("input").value;
  const aiMove = moves[Math.floor(Math.random() * moves.length)];
  let result = "";

  switch (playerMove) {
    case "rock":
      switch (aiMove) {
        case "rock":
          result = "Draw";
          break;
        case "scissor":
          result = "AI Lost";
          break;
        case "paper":
          result = "AI Won";
          break;
      }
      break;

    case "paper":
      switch (aiMove) {
        case "paper":
          result = "Draw";
          break;
        case "rock":
          result = "AI Lost";
          break;
        case "scissor":
          result = "AI Won";
          break;
      }
      break;

    case "scissor":
      switch (aiMove) {
        case "scissor":
          result = "Draw";
          break;
        case "paper":
          result = "AI Lost";
          break;
        case "rock":
          result = "AI Won";
          break;
      }
      break;
  }
  return { result, aiMove };
};

const playGame = () => {
  const { result, aiMove } = evaluateGame();
  
};
