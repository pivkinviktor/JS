const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const Text = document.querySelector('#Text');

Text.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

const _prompt_ = document.querySelector('#_prompt_');

_prompt_.addEventListener('click', () => {
    prompt('Отображает диалоговое окно с запросом на ввод текста.');
})