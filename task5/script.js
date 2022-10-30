let button = document.querySelector('button');
console.log(button);

let input = document.querySelector('input');
console.log(input);

let duplicate = document.querySelector('#duplicateField');
console.log(duplicate);

input.addEventListener('keyup', 
  (event) => {
    duplicate.textContent = input.value;
    event.preventDefault();
})

button.addEventListener('click',
(event) => {
  console.log(input.value)
  input.value = "";
  duplicateField.textContent = "";
})