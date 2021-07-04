// находим количество категорий в списке
const listCategories = document.querySelector("#categories");

const listCategoriesSum = listCategories.querySelectorAll(".item");

console.log(`В общем списке всего ${listCategoriesSum.length} категории.`);

// Находим количество элементов в каждой категории

function findAmountElements(listCategoriesSum) {
  listCategoriesSum.forEach((elem) => {
    console.log("Категория:", elem.querySelector("h2").textContent);
    console.log("Количество элементов:", elem.querySelectorAll("li").length);
  });
}

findAmountElements(listCategoriesSum);
