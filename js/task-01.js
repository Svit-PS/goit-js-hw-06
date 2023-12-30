const listEl = document.querySelector("#categories");
const arrayCategories = [...listEl.children];
console.log(`Number of categories: ${arrayCategories.length}`);

const contentItem = (element) => {
  console.log("\n");

  console.log(element.firstElementChild.textContent);

  console.log(`Elements: ${element.lastElementChild.children.length}`);
};

arrayCategories.forEach(contentItem);
