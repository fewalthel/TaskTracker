//переход на страницу с задачами
function goToTasks() {
    window.location.href = 'tasks.html';
}

//переход на главную страницу
function goToGeneralPage() {
    window.location.href = 'home.html';
}
 
//добавление задачи
document.getElementById('addButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const textValue = textInput.value.trim();

    if (textValue) {
        //контейнер для добавления задач
        const textContainer = document.getElementById('textContainer');
        
        // Создание нового текстового элемента
        const newTextElement = document.createElement('div');
        newTextElement.className = 'text-item';
        newTextElement.textContent = textValue;

        // Добавление нового элемента в контейнер
        textContainer.appendChild(newTextElement);

        // Очистка поля ввода
        textInput.value = '';
    } else {
        alert('Пожалуйста, введите текст.');
    }
});
