const editor = document.getElementById('editor');
const reset = document.getElementById('reset');

// Загрузка содержимого из localStorage
if (localStorage.getItem('editorContent')) {
    editor.value = localStorage.getItem('editorContent');
}

// Сохранение содержимого в localStorage
editor.addEventListener('input', function() {
    localStorage.setItem('editorContent', editor.value);
});

// Очистка localStorage
reset.addEventListener("click", function (event) {
    localStorage.removeItem('editorContent');
    editor.value = '';
});