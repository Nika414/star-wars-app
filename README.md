# StarWars. Find all your favorite characters.

Приложение для просмотра информации о героях Звездных воин. Сделано на основе [Swapi](https://swapi.dev/).

## Ссылка на GitHub pages
[Ссылка на GitHub pages](https://nika414.github.io/star-wars-app)

## Обзор
* Приложение содержит 3 страницы: 
  *   Главная: страница содержит приветствие пользователя, навигационное меню (активная страница в меню подсвечена), кнопку перехода к странице с карточками персонажей.
  *   Страница с карточками о персонажах. 
  *   Страница с ошибкой 404.
* Навигационное меню доступно на главной странице и на странице с карточками.
* Заголовок страницы содержит общее количество персонажей.
* Реализована фильтрация карточек по признаку цвета глаз персонажа.
* Реализована пагинация, лоадер, сообщение об ошибке (в случае возникновения проблем на сервере).

## Использованные технологии
* React - функциональные компоненты, хуки (useState, useEffect), REST API.
* React router - Switch, Route, Redirect, useLocation, Link, NavLink, useHistory
* Redux-toolkit.
* CSS (адаптивная верстка).
* React-multi-select-component
* @testing-library/jest-dom

## Установка и запуск
### Требования:

npm >= 6.14;

* `npm i` - установка зависимостей;
* `npm run start` - запуск;
