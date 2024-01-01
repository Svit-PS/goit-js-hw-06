const refs = {
  body: document.querySelector("body"),
  div: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

refs.btn.addEventListener("click", onClickBtn);

function onClickBtn(event) {
  const colorRandom = getRandomHexColor();
  refs.body.style.backgroundColor = colorRandom;
  // console.dir(refs.div);
  // console.log(refs.div.style.backgroundColor);
  // refs.div.style.backgroundColor = ;
  refs.span.textContent = `- ${colorRandom}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
