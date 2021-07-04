// счетчик
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrementButton.addEventListener(`click`, function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementButton.addEventListener(`click`, function () {
  counter.increment();
  valueEl.textContent = counter.value;
});

//console.dir(valueEl);
