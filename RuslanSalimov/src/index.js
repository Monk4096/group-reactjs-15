import React from 'react';
import ReactDom from 'react-dom';

const h1 = (<h1 className="react-hello react2">Hello, React!</h1>);

const Message = (props) => {
    console.log(props);
    return <div>
        {props.message}: {props.test2}
    </div>
};
ReactDom.render(
    //h1,
    <Message message = "Test Hello Message" test2={15}/>,
    document.getElementById('root')
);