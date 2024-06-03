function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  var amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);

    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
