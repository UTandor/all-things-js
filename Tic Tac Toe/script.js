const boardElement = document.getElementById("board");

let board = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];
let turn = "O";

const player = document.createElement("h3");
player.id = "turn";
document.body.appendChild(player);

let winnerElement = document.createElement("strong");
document.body.appendChild(winnerElement);

let winConditionElement = document.createElement("p");
document.body.appendChild(winConditionElement);

const renderBoard = (persistTurn) => {
  const boxes = document.querySelectorAll(".box");

  if (boxes) {
    boxes.forEach((box) => {
      box.remove();
    });
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let box = document.createElement("button");
      box.innerHTML = board[i][j];
      box.classList = "box";
      box.id = `box-${i}-${j}`;
      box.addEventListener("click", () => changeContents(box.id));
      boardElement.appendChild(box);
    }
  }

  if (!persistTurn) {
    switch (turn) {
      case "X":
        turn = "O";
        break;

      case "O":
        turn = "X";
    }
  }
  player.innerHTML = turn;
};

const checkWinner = () => {
  let winner = "";
  let winCondition = "";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 2; j++) {
      if (
        board[i][j] !== "." &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i][j + 2]
      ) {
        winner = board[i][j];
        winCondition = "horizontal completion";
      }

      if (
        board[j][i] !== "." &&
        board[j][i] === board[j + 1][i] &&
        board[j][i] === board[j + 2][i]
      ) {
        winner = board[j][i];
        winCondition = "vertical completion";
      }

      if (
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[0][0] !== "."
      ) {
        winner = board[0][0];
        winCondition = "main diagonal";
      }
      if (
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[0][2] !== "."
      ) {
        winner = board[0][2];
        winCondition = "secondary diagonal";
      }
    }
  }

  if (winner !== "" && winCondition !== "") {
    winConditionElement.innerHTML = winner + " won via: " + winCondition;
    winnerElement.innerHTML = "Winner: " + winner;
  }
};

const changeContents = async (id) => {
  id = id.split("-");
  switch (board[id[1]][id[2]]) {
    case ".":
      board[id[1]][id[2]] = turn;
      renderBoard(false);

      break;

    default:
      renderBoard(true);

      break;
  }
  checkWinner();
};

renderBoard();
