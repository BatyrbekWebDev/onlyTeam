// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все кнопки с классом "btn"
  var buttons = document.querySelectorAll('.btn');
  
  // SVG изображения для кнопок Плюс и Минус
  var minus = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
    <path d="M0 1H10" stroke="white" stroke-width="2"/>
  </svg>`;
  
  var plus = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>`;

  // Добавляем обработчик события "клик" на каждую кнопку
  buttons.forEach(function (button) {
    // Получаем элемент с классом "description" внутри кнопки
    var description = button.querySelector('.description');

    button.addEventListener('click', function () {
      // Закрываем остальные открытые кнопки и меняем их значок на "+"
      buttons.forEach(function (btn) {
        if (btn !== button) {
          btn.innerHTML = plus;
          btn.classList.remove('active');
          btn.classList.remove('act');
        }
      });

      // Если кнопка уже активна, то закрываем ее и меняем значок на "+"
      if (button.classList.contains('active')) {
        button.innerHTML = plus;
        button.classList.remove('active');
        button.classList.remove('act');
      } else {
        // Если кнопка еще не активна, то раскрываем ее, добавляем текст из элемента "description" и меняем значок на "-"
        button.innerHTML = minus;
        button.innerHTML += description.innerHTML;
        button.classList.add('active');
        button.classList.add('act');
      }
    });

    // Добавляем обработчик события "клик" на всю страницу, чтобы закрыть активные кнопки при клике вне них
    document.addEventListener('click', function (event) {
      var isButtonClicked = button.contains(event.target);

      if (!isButtonClicked) {
        button.innerHTML = plus;
        button.classList.remove('active');
        button.classList.remove('act');
      }
    });
  });
});
