const image = document.getElementById("image");
let currentImage = 3;
console.log(image.src);
const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

scroll.addEventListener("mouseup", () => {
  isDown = false;
  scroll.classList.remove("active");
});

scroll.addEventListener("mouseleave", () => {
  isDown = false;
  scroll.classList.remove("active");
});

scroll.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  scroll.classList.add("active");
  scrollX = e.pageX - scroll.offsetLeft;
  scrollLeft = scroll.scrollLeft;
});

scroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  var element = e.pageX - scroll.offsetLeft;
  var scrolling = (element - scrollX) * 2;
  scroll.scrollLeft = scrollLeft - scrolling;
});

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
