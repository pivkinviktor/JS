
const initial = document.querySelector('a');
initial.addEventListener('click', 
  (event) => {
    const change = prompt('Измените текст');
    initial.textContent = change;
    event.preventDefault();
})
