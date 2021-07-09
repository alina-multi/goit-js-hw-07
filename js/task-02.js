
// Напиши скрипт,
//   который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const addIngridient = ingredients => { 
  return ingredients.map(ingridient => { 
    const element = document.createElement('li');
    element.textContent = ingridient;
    ingredientsEl.append(element);
  });

};

addIngridient(ingredients);
