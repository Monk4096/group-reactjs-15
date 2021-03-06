import React from 'react';
import classNames from 'classnames';

import './Message.scss';

export class Message extends React.Component {
    render(){
        const {text, author} = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'Bot',
            'message-companion': author === 'Bot',
        });


        return (
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        );
    }
}