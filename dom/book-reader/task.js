// Функция изменения размера шрифта
function changeFontSize(event) {
    event.preventDefault();

    const fontLinks = document.querySelectorAll('.font-size');
    fontLinks.forEach((link) => link.classList.remove('font-size_active'));
    event.target.classList.add('font-size_active');
    const dataSize = event.target.getAttribute('data-size');
    const bookElement = document.querySelector('.book');
    bookElement.classList.remove('book_fs-big', 'book_fs-small');

    if (dataSize === 'small') {
      bookElement.classList.add('book_fs-small');
    } else if (dataSize === 'big') {
      bookElement.classList.add('book_fs-big');
    }
}

const fontLinks = document.querySelectorAll('.font-size');
fontLinks.forEach((link) => {
    link.addEventListener('click', changeFontSize);
});
