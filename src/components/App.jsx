import React from 'react';
import MessageList from './MessageList.jsx';
import "./App.css";
import {AppBar} from "material-ui";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {user:'pe', text: 'hi :)'},
                {user:'yoda', text: 'world hello'}
            ]
        };
    }

    render() {
        return (
            <div style={{margin: "0 auto", maxWidth: "600px"}}>
                <AppBar title="Chat App" />  
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}