// Импорты

// CodePen импортирует React автоматически (его нужно указать в подключаемых библиотеках), но в своём коде импорты пропускать нельзя:

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// export default class Hello extends React.Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }

// Очевидные тезисы
// Компонент React — это класс, который наследуется от класса React.Component (как вы увидите позже, это не единственный способ создать компонент)
// Функция render возвращает нечто (рассмотрим позже), что будет отрисовано в браузере. Класс-компонент без функции render существовать не может, это его интерфейс
// Экспорт класса по умолчанию задан неспроста. В JS принято создавать один класс на файл. В отличие от обычных классов, React-компоненты имеют расширение JSX, а значит компонент, 
// определённый выше, должен лежать в файле с именем Hello.jsx.

// Обратите внимание: класс всё равно проименован, хотя это и не обязательно в случае дефолтного экспорта. Вы действительно можете его не именовать, 
// но тогда через расширение React Dev Tools будет тяжело понять, что же отрисовал React, так как любой безымянный компонент отображается как <ReactComponent>. 
// Поэтому возьмите себе за правило всегда давать компонентам имена.

// Неочевидные тезисы
// Самое поразительное происходит в этой строчке:
// return <div>Hello</div>;
// Здравый смысл подсказывает, что такая запись синтаксически невозможна в JS. И он будет прав. 
// То, что вы видите, называется JSX и является расширением языка (добавляется с помощью Babel). Кардинальное решение для фреймворка, не правда ли? В процессе вы поймёте, 
// что это не такая уж и плохая идея.

// Главное сейчас запомнить то, что в конечном итоге любой React-компонент возвращает кусок DOM (на самом деле — виртуальный DOM).
// Кстати, div — это тоже компонент React, только встроенный. Отличить встроенные компоненты от самописных очень легко. Встроенные всегда начинаются с маленькой буквы, 
// а те, которые не являются частью React, должны начинаться с большой.
// Хорошим стилем считается давать расширение .jsx для всех файлов, которые содержат JSX, независимо от того, создаётся ли компонент в этом файле или нет.

// Mount
// const root = ReactDOM.createRoot(document.getElementById('react-root'));
// root.render(<Hello />);
// Созданный компонент (класс компонента) сам по себе ничего не делает. Чтобы насладиться результатом его работы, нужно произвести так называемое монтирование. 
// То есть указать React, куда его вставить в DOM.

// Для этой задачи обязательно требуется реальный DOM-узел. Подходящим может быть любой узел внутри body. Как правило, если у вас не SPA, то React используется в виде виджетов, 
// подключаемых на странице в разных местах. Причём на одной странице может быть сразу несколько виджетов. Например, на Хекслете все фронтенд-элементы — это как раз виджеты. На основе узла создаётся контейнер приложения строчкой:

// const root = ReactDOM.createRoot(document.getElementById('react-root'));
// Далее в контейнер производится монтирование компонента:

// root.render(<Hello />);
// В качестве параметра передаётся компонент в синтаксисе JSX.


// JSX
// JSX — это похожее на XML-разметку расширение для JavaScript, созданное специально для задач React. React из коробки поставляется с набором компонентов, которые полностью повторяют HTML. По большей части синтаксис и структура JSX и HTML совпадают, но есть некоторые важные различия:

// Так как это похожий на XML синтаксис, одиночные теги в JSX должны быть закрыты: <hr />
// Вместо атрибута class в JSX используется имя свойства в DOM: className, так как class — это зарезервированное слово для создания классов
// Существуют и другие различия, о которых будет рассказываться в следующих уроках. Большинство этих отличий делает работу с DOM внутри React проще и удобнее.

// Так же как и в HTML, из компонентов можно строить композиции, например такую:

// const vdom = (
//   <div className="card">
//     <div className="card-body">
//       <h4 className="card-title">Card title</h4>
//       <p className="card-text">my text</p>
//       <a href="#" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>
//   </div>
// );
// И это всё валидный код на JS с подключённым расширением для JSX.

// То, что каждый компонент React возвращает кусок DOM, является следствием его фундаментальной идеи и архитектуры. 
// В одном из уроков эта идея будет рассмотрена подробнее, и вы наверняка проникнитесь ей. Но почему понадобилось вводить JSX?

// Нужно понимать, что JSX — расширение языка, а значит это именно код, а не html. 
// А раз JSX транслируется в код, то, следовательно, вы могли бы сразу писать этот код. Верно? Верно, но не совсем:

// React.createElement(
//   "div",
//   { className: "card" },
//   React.createElement(
//     "div",
//     { className: "card-body" },
//     React.createElement(
//       "h4",
//       { className: "card-title" },
//       "Card title"
//     ),
//     React.createElement(
//       "p",
//       { className: "card-text" },
//       "my text"
//     ),
//     React.createElement(
//       "a",
//       { href: "#", className: "btn btn-primary" },
//       "Go somewhere"
//     )
//   )
// );
// Пример кода выше — это как раз то, как бы выглядели функции render компонентов на React. 
// Причём данный пример очень тривиальный и не содержит логику. Если бы у вас появились условные конструкции, 
// то этот код перешёл бы все разумные пределы по сложности анализа. 
// К сожалению, или к счастью, собирать древовидные структуры в коде (а DOM — это дерево) — занятие очень тяжёлое и беспощадное. 
// Теперь должно стать чуть понятнее, зачем нужен JSX, и что JSX — это не вёрстка (как думают некоторые).


// BEGIN
import Card from './Card.jsx';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Card />);
// END
src/Card.jsx
// BEGIN
export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card</p>
          <button type="button" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}
// END