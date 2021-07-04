let inputElem = document.querySelector("#validation-input");

let inputLength = Number(inputElem.getAttribute("data-length"));

const input = document.querySelector("input");

inputElem.addEventListener("change", (event) => {
  const value = event.target.value;

  if (value.length === +inputLength) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.remove("valid");
    inputElem.classList.add("invalid");
  }
  console.log(input);
});
