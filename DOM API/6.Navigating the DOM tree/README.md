В интернете существует класс программ, называемый web scraper. Эти программы ходят по определенным страницам сайтов, анализируют их HTML-код и извлекают данные в удобном для работы виде. Это помогает в работе с сайтами, которые не позволяет извлекать эти данные через API или другим удобным способом. Например, извлечение данных через API не работает на сайтах по поиску работы, чтобы вакансии не публиковали где-то в другом месте.

Подобные программы работают примерно так. Они загружают HTML-код страницы к себе, преобразуют его в DOM-дерево и извлекают из него нужные данные, основываясь на структуре страницы. Как правило, им заранее надо знать структуру HTML, так как алгоритм анализа четко фиксирован.

За кадром остался вопрос этичности. Веб-скрапинг может выполняться в благих целях, а может и в злых. В любом случае, парсить сайты в коммерческих целях можно только в том случае, если они это разрешают.

В этом упражнении мы реализуем элемент подобной программы – функцию, которая принимает на вход DOM и возвращает извлеченные из него данные.

Опишем структуру HTML, которую нужно парсить. Внутри <body> расположена статья, состоящая из параграфов и других элементов (таблиц или картинок). Нам нужно достать текст из параграфов, пропуская все остальные элементы. Пример страницы можно посмотреть в веб-доступе.

src/extractor.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход document.documentElement, извлекает из него параграфы и возвращает массив из их содержимого. Не забудьте очистить данные от концевых пробелов и переводов строк с помощью trim():

<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <p>
      First paragraph
    </p>
    <table border="1">
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
    </table>
  </body>
</html>
import extractData from './extractor.js';
 
const data = extractData(document.documentElement);
console.log(data);
// [
//   'First paragraph'
// ]
src/index.js
Проверьте, как работает вновь созданная функция на странице доступной в веб-доступе. Импортируйте функцию в index.js, выполните ее с аргументом document.documentElement и распечатайте результат в консоль. Проверьте, что в консоль вывелись нужные данные.

Подсказки
Имя тега доступно через свойство Element.tagName
Почему не стоит использовать innerText