const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//
const listElem = document.querySelector("#ingredients");

const createListItem = (item) => {
  const element = document.createElement("li");
  element.textContent = item;

  return element;
};

const createIngredients = ingredients.map((ingredient) =>
  createListItem(ingredient)
);

console.dir(createIngredients);

listElem.append(...createIngredients);
