const message = document.querySelector("#message");
const flowers = document.querySelector("#flowers");
const bloomBtn = document.querySelector("#bloomBtn");
const finalMessage = document.querySelector("#finalMessage");
const topText = document.querySelector("#topText");

let clickCount = 0;
let fontSize = 18;

const messages = [
  "I’m proud of you. You’re carrying so much, literally and emotionally.",
  "Our baby is going to know so much love because of you.",
  "This baby is so lucky to have you.",
  "I’m proud of you. You’re carrying so much, literally and emotionally.",
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
    message.classList.remove("celebrate");
    flowers.classList.remove("celebrate");
    void message.offsetWidth;

    message.classList.add("celebrate");
    flowers.classList.add("celebrate");
  }
});
