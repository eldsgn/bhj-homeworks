// Проверяем наличие элемента в пределах вьюпорта
function isisVisible(el) {
    let rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}
  
// Функция для обработки скролла
function revealElementsOnScroll() {
    let revealElements = document.querySelectorAll('.reveal');
  
    revealElements.forEach(function (element) {
      if (isisVisible(element)) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
}

window.addEventListener('scroll', revealElementsOnScroll);
revealElementsOnScroll();
  