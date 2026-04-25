const message = document.querySelector("#message");
const flowers = document.querySelector("#flowers");
const bloomBtn = document.querySelector("#bloomBtn");
const finalMessage = document.querySelector("#finalMessage");
const topText = document.querySelector("#topText");

let clickCount = 0;
let fontSize = 18;

const messages = [
  "You are loved.",
  "You make everything better.",
  "Thank you for everything you do.",
  "You are appreciated more than words can say.",
  "Happy Mother's Day!",
];

bloomBtn.addEventListener("click", function () {
  clickCount++;
  fontSize += 4;

  message.style.fontSize = fontSize + "px";

  const messageIndex = Math.min(clickCount - 1, messages.length - 1);
  message.textContent = messages[messageIndex];
  console.log(clickCount);
  flowers.textContent = "🌸🌸🌸🌸".repeat(clickCount);

  if (clickCount >= 5) {
    finalMessage.classList.remove("d-none");
    topText.textContent = "Happy Mother's Day!";
  }
});
