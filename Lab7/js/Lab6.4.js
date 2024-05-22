const list = document.querySelectorAll("#upgradeUl li");
const doubleButton = document.getElementById("doubleButton");

doubleButton.addEventListener("click", () => {
  list.forEach((item) => {
    let value = parseInt(item.textContent, 10);
    item.textContent = value * 2;
  });
});
