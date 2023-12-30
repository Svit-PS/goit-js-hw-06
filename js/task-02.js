const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const addArrayEl = (element) => {
  const newEl = document.createElement("li");
  newEl.textContent = element;
  newEl.classList.add("item");
  return newEl;
};

const arrayNewEl = ingredients.map(addArrayEl);
ulEl.append(...arrayNewEl);
