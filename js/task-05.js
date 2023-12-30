const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onOutputName = (event) => {
  outputEl.textContent = !event.target.value ? "Anonymous" : event.target.value;
};

inputEl.addEventListener("input", onOutputName);
