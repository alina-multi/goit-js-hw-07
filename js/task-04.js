const counterEl = document.querySelector('#counter');
const btnDecrement = counterEl.querySelector('button[data-action="decrement"]');
const btnIncrement = counterEl.querySelector('button[data-action="increment"]');
const numberValue = counterEl.querySelector('#value');

let value = Number(numberValue.textContent);   
btnDecrement.addEventListener('click', () => numberValue.textContent = value -= 1); 
btnIncrement.addEventListener('click', () => numberValue.textContent = value += 1); 
    
