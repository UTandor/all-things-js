const carouselElement = document.getElementById("carousel");
const nav = document.getElementById("nav");

let currPage = 0;
const pages = [];

const rightButton = document.createElement("button");
rightButton.id = "right";
rightButton.innerHTML = "Right";
rightButton.addEventListener("click", () => {
  if (currPage !== pages.length + 1) currPage += 1;
});

const leftButton = document.createElement("button");
leftButton.id = "left";
leftButton.innerHTML = "Left";
leftButton.addEventListener("click", () => {
  if (currPage < pages.length) currPage -= 1;
});

nav.appendChild(rightButton);
nav.appendChild(leftButton);

const page1 = document.createElement("div");
page1.innerHTML = "This is page 1";
pages.push(page1);

const page2 = document.createElement("div");
page2.innerHTML = "This is page 2";
pages.push(page2);

const page3 = document.createElement("div");
page3.innerHTML = "This is page 3";
pages.push(page3);

pages.forEach((page) => {
  carouselElement.appendChild(page);
});


