const refs = {
  div: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onClickBtn);

function onClickBtn() {
  const colorRandom = getRandomHexColor();

  refs.div.style.backgroundColor = colorRandom;
  refs.span.textContent = `- ${colorRandom}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
