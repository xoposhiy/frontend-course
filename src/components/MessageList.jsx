import React from 'react';
import Message from "./Message.jsx";
import {format} from "../emoji.js";
import {List, Card, Subheader} from "material-ui";

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
            <Card>
                <List>
                    <Subheader>Last messages:</Subheader>
                    {messageNodes}
                </List>
            </Card>
        )
    }
}