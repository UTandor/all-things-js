let form = document.getElementById("form");
let ul = document.getElementById("list");

function leftToRight() {
  const input = document.getElementById("size").value;
  console.log(input);

  ul.innerHTML = "";

  for (let i = 0; i < input; i += 1) {
    const li = document.createElement("li");
    li.classList = 'list-item'
    li.innerHTML = "#".repeat(i + 1);
    ul.appendChild(li);
  }
}

function rightToLeft() {
  const input = document.getElementById("size").value;
  console.log(input);

  ul.innerHTML = "";

  for (let i = 0; i < input; i += 1) {
    const li = document.createElement("li");
    li.classList = 'list-item'
    li.innerHTML = "#".repeat(input - i);
    ul.appendChild(li);
  }
}

function rightAndLeft() {
  const input = document.getElementById("size").value;

  ul.innerHTML = "";
  for (let i = 0; i < input; i += 1) {
    const li = document.createElement("li");
    li.classList = 'list-item'
    li.innerHTML = "#".repeat(i + 1);
    ul.appendChild(li);
  }
  for (let i = 0; i < input; i += 1) {
    const li = document.createElement("li");
    li.classList = 'list-item'
    li.innerHTML = "#".repeat(input - i);
    ul.appendChild(li);
  }
}
