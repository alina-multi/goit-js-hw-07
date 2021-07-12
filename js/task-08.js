
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать,
//  после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.



const inputEl = document.querySelector("input");
const btnRenderEl = document.querySelector("[data-action='render']");
const btnDestroyEl = document.querySelector("[data-action='destroy']");
const boxes = document.querySelector("#boxes");


const arrayEl = [];
let rgbRed = 0;
let rgbGreen = 0;
let rgbBlue = 0;
let initialWidth = 10;

btnDestroyEl.addEventListener("click", destroyBoxes);
 
inputEl.addEventListener("change", (event) => {
    let amount = event.currentTarget.value;
    createBoxes(amount);
});

function createBoxes(amount) {
    const element = document.createElement("div");
    arrayEl.push(element);
    initialWidth = initialWidth + 10;
    element.textContent = 0; 
    let elementTextContent = Number(element.textContent);
    elementTextContent = elementTextContent + 0;
  
    arrayEl.map(el => {
        el.textContent = Number(element.textContent) + elementTextContent + 1;
        elementTextContent = Number(el.textContent)
        el.style.width = Number(el.style.width) + initialWidth + 10 + "px";
        el.style.height = Number(el.style.height) + initialWidth + 10 + "px";
    })

    btnRenderEl.addEventListener("click", () => { 
        arrayEl.map(el => {
        getRandomColor(Max);
        el.style.backgroundColor = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
        });
        
        boxes.appendChild(element);  
        
    });
 }

 function destroyBoxes() { 
    // boxes.textContent = '';
    window.location.reload()
};

const Max = 266;
function getRandomColor(max) { 
    rgbRed = Math.round(Math.random() * max);
    rgbGreen = Math.round(Math.random() * max);
    rgbBlue = Math.round(Math.random() * max);}