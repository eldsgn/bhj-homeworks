const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');

// Установка cookie
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

// Получение cookie
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie) {
        return decodeURIComponent(cookie.substring(name.length + 1));
    }
    return null;
}

// Если нет cookie о закрытии модального окна, показываем его
if (getCookie('modalClosed') !== 'true') {
    modal.classList.add('modal_active');
}

// При нажатии на кнопку закрытия, удаляем класс и устанавливаем cookie
closeModal.addEventListener('click', function() {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'true');
});
