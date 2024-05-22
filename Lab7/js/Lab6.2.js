document.getElementById("swapButton").addEventListener("click", function () {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
});
