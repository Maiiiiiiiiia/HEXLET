В этом упражнении задачка, похожая на предыдущую. Но теперь мы будем использовать поисковые методы без прямого обхода дерева.

Нам нужно извлечь данные с фиксированной структурой. Мы будем парсить страницу категории статей. Эта страница содержит заголовок категории, его описание и ссылки на статьи с небольшим описанием. Эта структура не меняется, меняется только количество статей от категории к категории.

src/extractor.js
Реализуйте логику функции, которая принимает на вход document, извлекает из него данные и возвращает объект нужной структуры:

<div class="content">
  <h1>Category Name</h1>
  <div class="description">Category Description</div>
  <div class="links">
    <div>
      <h2><a href="#">Article Name 1</a></h2>
      <p>Article Description 1</p>
    </div>
    <div>
      <h2><a href="#">Article Name 2</a></h2>
      <p>Article Description 2</p>
    </div>
  </div>
</div>
Рассмотрим этот пример подробнее:

Category Name — заголовок категории
Category Description — описание категории
Article Name 1 — название статьи 1
Article Description 1 — описание статьи 1
Article Name 2 — название статьи 2
Article Description 2 — описание статьи 2
Нужно сформировать объект, в котором категория описывается следующими свойствами:

title — заголовок категории
description — описание категории
items — статьи
Структура каждой статьи определяется объектом со свойствами:

title — заголовок статьи (берется из ссылки статьи)
description — описание статьи
import extractData from './extractor.js';
 
const data = extractData(document);
console.log(data);
// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
src/index.js
Проверьте, как работает вновь созданная функция на странице доступной в веб-доступе. Импортируйте функцию в index.js, выполните ее с аргументом document и распечатайте результат в консоль. Проверьте, что в консоль вывелись нужные данные.

Подсказки
Не стесняйтесь выполнять querySelector() на любые данные
Для выборки списка статей используйте querySelectorAll
Разделение чтения и использования