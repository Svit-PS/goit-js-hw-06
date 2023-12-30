const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const amountEl = document.querySelector("input");

btnCreateEl.addEventListener("click", onClickCreate);
btnDestroyEl.addEventListener("click", destroyBoxes);

function onClickCreate() {
  createBoxes(amountEl.value);
}

function createBoxes(amount) {
  const arrayDiv = [];
  for (let index = 0; index < amount; index++) {
    const newEl = document.createElement("div");
    newEl.style.height = 30 + 10 * index + "px";
    newEl.style.width = 30 + 10 * index + "px";
    newEl.style.backgroundColor = getRandomHexColor();
    arrayDiv.push(newEl);
  }
  boxesEl.append(...arrayDiv);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
