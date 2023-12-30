const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { email: userEmail, password: userPassword } =
    event.currentTarget.elements;
  if (!userEmail.value || !userPassword.value) {
    alert("Не всі данні заповнені!");
    return;
  }
  const data = {
    email: userEmail.value,
    password: userPassword.value,
  };
  formEl.reset();
  console.log(data);
}
