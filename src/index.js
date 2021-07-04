import React from "react";
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// const template = (
//     <div>
//         <img
//             src={painting.url}
//             alt={painting.title}
//             width="300px" />
//         <h2>{painting.title}</h2>
//         <p>
//             Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//         </p>
//         <p>Цена: {painting.price} кредитов</p>
//         <button type="button">Добавить в корзину</button>
//     </div>
// );

// ReactDOM.render(template, document.getElementById('root'));





// const link = React.createElement(
//     'a',
//     { href: 'reactjs.org', target: '_blank' },
//     'ссылка_1'
// );

// const jsxLink = <a href="reactjs.org">ссылка_2</a>;

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById('root'));
// ReactDOM.render(jsxLink, document.getElementById('root'));