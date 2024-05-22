const square = document.getElementById("square");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

increaseButton.addEventListener("click", () => {
  const currentWidth = parseInt(window.getComputedStyle(square).width);
  const currentHeight = parseInt(window.getComputedStyle(square).height);
  square.style.width = `${currentWidth + 15}px`;
  square.style.height = `${currentHeight + 15}px`;
});

decreaseButton.addEventListener("click", () => {
  const currentWidth = parseInt(window.getComputedStyle(square).width);
  const currentHeight = parseInt(window.getComputedStyle(square).height);
  if (currentWidth > 15 && currentHeight > 15) {
    square.style.width = `${currentWidth - 15}px`;
    square.style.height = `${currentHeight - 15}px`;
  }
});
