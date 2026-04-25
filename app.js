const counterDisplay = document.querySelector("#counter");
const counterButton = document.querySelector("#buttonCounter");
const counterMinusButton = document.querySelector("#buttonCounterMinus");

let count = 0;

counterButton.addEventListener("click", function () {
  count = count + 1;
  counterDisplay.textContent = count;
  console.log(count);
});

counterMinusButton.addEventListener("click", function () {
  count = count - 1;
  counterDisplay.textContent = count;
});
