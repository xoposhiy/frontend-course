import React from 'react';
import Message from "./Message.jsx";
import {format} from "../emoji.js";

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: props.messages
        };
    }

    render() {
        var messageNodes = this.state.messages.map(
            (m, i) => <Message {...m} key={i} />);
        return (
            <div>
                <div>Last messages:</div>
                {messageNodes}
            </div>
        )
    }
}