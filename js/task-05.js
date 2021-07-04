const inputElem = document.querySelector("#name-input");
const nameElem = document.querySelector("#name-output");

function onInput() {
  if (inputElem.value !== "") nameElem.textContent = inputElem.value;
  else nameElem.textContent = "незнакомец";
}

inputElem.addEventListener(`input`, onInput);
