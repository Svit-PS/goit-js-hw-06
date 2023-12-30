let counterValue = 0;
const counterEl = document.querySelector("#value");
const btnIcrEl = document.querySelector('[data-action="increment"]');
const btnDecrEl = document.querySelector('[data-action="decrement"]');

const onChangeValue = (event) => {
  const operation = event.currentTarget.dataset.action;
  counterValue =
    operation === "increment" ? counterValue + 1 : counterValue - 1;

  counterEl.textContent = `${counterValue}`;
};

btnIcrEl.addEventListener("click", onChangeValue);
btnDecrEl.addEventListener("click", onChangeValue);
