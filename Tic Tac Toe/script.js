const boardElement = document.getElementById("board");

let board = [
  [".", "X", "."],
  [".", ".", "."],
  [".", ".", "."],
];
let turn = "O";

const player = document.createElement("h3");
player.id = "turn";
document.body.appendChild(player);

let winnerElement = document.createElement("p");
document.body.appendChild(winnerElement);

const renderBoard = () => {
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

  switch (turn) {
    case "X":
      turn = "O";
      break;

    case "O":
      turn = "X";
  }
  player.innerHTML = turn;
};

const checkWinner = () => {
  let winner = "fd";

  if (winner !== "") {
    console.log("winner found");

    winnerElement.innerHTML = "Winner: " + winner;
  }
};

const changeContents = (id) => {
  id = id.split("-");
  board[id[1]][id[2]] = turn;
  renderBoard();
  checkWinner();
};

renderBoard();
