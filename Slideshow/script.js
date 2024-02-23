const carouselElement = document.getElementById("carousel");

const pages = [];

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


