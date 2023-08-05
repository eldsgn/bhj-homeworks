document.addEventListener('DOMContentLoaded', () => {
  let activeTooltip = null;
  const tooltips = document.querySelectorAll('.has-tooltip');

  // Координаты ссылки
  function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.bottom
    };
  }

  // Обработчик клика на ссылку
  function handleClick(event) {
    event.preventDefault();

    if (activeTooltip) {
      activeTooltip.remove();
    }

    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    tooltipElement.textContent = event.target.title;

    document.body.appendChild(tooltipElement);
    const linkCoords = getElementPosition(event.target);
    tooltipElement.style.left = linkCoords.left + 'px';
    tooltipElement.style.top = linkCoords.top + 'px';
    tooltipElement.classList.add('tooltip_active');
    activeTooltip = tooltipElement;

    // Обработчик клика на документе для закрытия подсказки
    function handleDocumentClick(event) {
      if (!event.target.classList.contains('has-tooltip') && !event.target.classList.contains('tooltip')) {
        tooltipElement.remove();
        document.removeEventListener('click', handleDocumentClick);
        activeTooltip = null;
      }
    }

    document.addEventListener('click', handleDocumentClick);
  }

  // Обработчик клика для ссылок "has-tooltip"
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', handleClick);
  });
});
