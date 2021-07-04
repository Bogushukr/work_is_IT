import React from "react";
import PropTypes from 'prop-types';
import defaultImage from "./default.jpg";


const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
    <div>
        <img src={url} alt={title} width="300px" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{tag}</a>
        </p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: { quantity < 10 ? "Заканчивается" : "есть в наличии"}</p>
        <button type="button">Добавить в корзину</button>
    </div>
);

Painting.defaultProps = {
    price: 1000000,
    url: defaultImage,
};

Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};



// const Painting = (props) => {
//     return (
//         <div>
//             <img src={props.url} alt={props.title} width="300px" />
//             <h2>{props.title}</h2>
//             <p>
//                 Автор: <a href={props.profileUrl}>{props.tag}</a>
//             </p>
//             <p>Цена: {props.price} кредитов</p>
//             <button type="button">Добавить в корзину</button>
//         </div>
//     );
// };

export default Painting;