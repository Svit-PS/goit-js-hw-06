const inputEl = document.querySelector("#validation-input");

const onCheckInput = (event) => {
  const elem = event.target;
  if (elem.value.length == elem.dataset.length) {
    elem.classList.add("valid");
    elem.classList.remove("invalid");
  } else {
    elem.classList.add("invalid");
    elem.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", onCheckInput);
