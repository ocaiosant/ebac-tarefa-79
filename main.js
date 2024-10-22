const form = document.getElementById("form-confirm");
const inputA = document.getElementById("valor-a");
const inputB = document.getElementById("valor-b");
const containerMessageSucess = document.querySelector(".success-message");
const containerMessageError = document.querySelector(".error-message");

function numberValid(valueA, valueB) {
  return valueB > valueA;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputValueA = parseFloat(inputA.value);
  const inputValueB = parseFloat(inputB.value);

  const formValid = numberValid(inputValueA, inputValueB);
  containerMessageError.style.display = "none";
  containerMessageSucess.style.display = "none";

  if (formValid) {
    containerMessageSucess.style.display = "block";
  } else {
    containerMessageError.style.display = "block";
  }

  inputA.value = " ";
  inputB.value = " ";
})