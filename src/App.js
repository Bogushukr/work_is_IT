import React from 'react';
import Logo from './components/Logo';
import PaintingList from './components/PaintingsList';
import Panel from './components/Panel';
import paintings from './paintings.json';


const App = () => {
    return (
        <div>
            <Panel title="Последние новости">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam amet minima ea facilis molestias.
                    Fuga eligendi molestiae vitae officiis illum laboriosam,
                    ducimus incidunt repudiandae cupiditate culpa eos modi qui esse?
                </p>

                <a href=" ">Читать...</a>
            </Panel>

                        <Panel>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam amet minima ea facilis molestias.
                    Fuga eligendi molestiae vitae officiis illum laboriosam,
                    ducimus incidunt repudiandae cupiditate culpa eos modi qui esse?
                </p>
            </Panel>

            <Logo text="Главный компонент-контейнер приложения" />            
            <PaintingList paintings={paintings} /> 
        </div>
    );
};

export default App;






// const App = () => {
//     return (
//         <div>
//             <Logo text="Главный компонент-контейнер приложения"/>

//             {[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, ]}
 
//             <Painting
//                 url={paintings[0].url}
//                 title={paintings[0].title}
//                 price={paintings[0].price}
//                 profileUrl={paintings[0].author.url}
//                 tag={paintings[0].author.tag}
//                 quantity={paintings[0].quantity}
//             />

//              <Painting
//                 url={paintings[2].url}
//                 title={paintings[2].title}
//                 price={paintings[2].price}
//                 profileUrl={paintings[2].author.url}
//                 tag={paintings[2].author.tag}
//                 quantity={paintings[2].quantity}
//             />
//         </div>
//     );
// };

// const painting = {
//     "id": "id-1",
//     "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     "title": "Feathers. Art abstract",
//     "price": 500,
//     "author": {
//         "tag": "ractapopulous",
//         "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 10
// };

// const painting2 = {
//     "id": "id-2",
//     "url": "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
//     "title": "Bird. Animal art abstract",
//     "price": 400,
//     "author": {
//       "tag": "ractapopulous",
//       "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 15
//   }

// const App = () => {
//     return (
//         <div>
//             <h1>Главный компонент-контейнер приложения</h1>
//             <Painting
//                 url="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg"
//                 title="Bird. Animal art abstract"
//                 price="500"
//                 profileUrl="https://pixabay.com/users/ractapopulous-24766/"
//                 tag="ractapopulous"
//             />

//               <Painting
//                 url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg"
//                 title="Feathers. Art abstract"
//                 price="400"
//                 profileUrl="https://pixabay.com/users/ractapopulous-24766/"
//                 tag="ractapopulous"
//             />
//         </div>
//     );
// };