const image = document.getElementById("image");
let currentImage = 3;
console.log(image.src);
const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

const advanceRight = () => {
  if (currentImage < 5) {
    currentImage += 1;
    image.src = `assets/img-${currentImage}.jpg`;
  }
};
const advanceLeft = () => {
  if (currentImage > 1) {
    currentImage -= 1;
    image.src = `assets/img-${currentImage}.jpg`;
  }
};

image.src = `assets/img-${currentImage}.jpg`;
