import React from 'react';
import ReactDom from 'react-dom';

import {Layout} from 'components/Layout';

import {Messenger} from 'components/Messenger';

//Вариант 1
// const elementH1 = React.createElement(
//     'h1',
//     {className: 'react-hello react2'},
//     'Hello, React!'
// );

//Вариант 2 - JSX
const elementH1 = (<h1 className="react-hello react2">Hello, React!</h1>);

//Data
const messagesData = ['Hello', 'Hi', 'Привет!'];

//Функциональный компонент
//Группировка сообщений
const MessageList = (props) => {
    return props.messages.map((item, index) => <Message text={item} key={index} />);
};


//Button
const Button = () => {
    //Вспомогательный код
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click on button!');
    };

    return <div>
        Button: <button onClick={handleClick}>Test button</button>
    </div>
};

//Выводит 1 сообщение
const Message = (props) => <div>
    Сообщение: {props.text}
</div>; 


ReactDom.render(

    // <Messenger />,
    <Layout />,
    document.getElementById('root'),

);