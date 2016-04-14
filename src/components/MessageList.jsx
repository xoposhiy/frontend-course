import React from 'react';
import Message from "./Message.jsx";
import {List, Card, CardText, Subheader} from "material-ui";

export default class MessageList extends React.Component {
    render() {
        if (!this.props.messages.length){
            return (<Card><CardText>Loading...</CardText></Card>);
        }
        var messageNodes = this.props.messages.map(
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