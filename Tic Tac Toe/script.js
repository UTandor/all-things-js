const boardElement = document.getElementById("board");

let board = [
  [".", "X", "."],
  [".", ".", "."],
  [".", ".", "."],
];

const renderBoard = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let box = document.createElement("button");
      box.innerHTML = board[i][j];
      box.classList = "box";
      box.id = `box-${i}-${j}`;
      boardElement.appendChild(box);
    }
  }
};

renderBoard();
