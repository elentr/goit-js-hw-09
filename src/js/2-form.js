const formData = {
  email: "",
  message: ""
}

const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

const localStorageKey = "feedback-form-state";
const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  input.value = formData.email;
  textarea.value = formData.message;
}

form.addEventListener("input", () => {
  formData.email = input.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (formData.email.trim() === "" || formData.message.trim()  === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});