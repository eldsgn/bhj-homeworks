const dropdownValues = document.querySelectorAll('.dropdown__value');

// Функция для сворачивания/разворачивания списка
function toggleDropdown(event) {
  const dropdownList = event.target.nextElementSibling;
  dropdownList.classList.toggle('dropdown__list_active');
}

// Функция для замены значения по выбору пункта меню
function selectItem(event) {
  event.preventDefault();
  const newValue = event.target.textContent;
  const dropdown = event.target.closest('.dropdown');
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  dropdownValue.textContent = newValue;
  dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
}

// Обработчик событий для каждой кнопки с выпадающим списком
dropdownValues.forEach((dropdownValue) => {
  dropdownValue.addEventListener('click', toggleDropdown);
  const dropdownItems = dropdownValue.nextElementSibling.querySelectorAll('.dropdown__item');
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener('click', selectItem);
  });
});
