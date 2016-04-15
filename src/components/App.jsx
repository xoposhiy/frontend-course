import React from 'react';
import MessageList from './MessageList.jsx';
import MessageBox from './MessageBox.jsx';
import {AppBar} from "material-ui";
import Firebase from "firebase"; 

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.firebase = new Firebase("https://front-lesson.firebaseio.com/messages");
        this.state = { messages: []}; 
        this.firebase.limitToLast(10).on("value", data => {
           var messagesObj = data.val();
           var messages = Object.keys(messagesObj).map(key => messagesObj[key]);
           this.setState({messages: messages}); 
        });
    }
    
    addMessage(message){
        console.log("push " + message);
        this.firebase.push({
            user: "pe",
            text: message
        });
    }

    render() {
        return (
            <div style={{margin: "0 auto", maxWidth: "600px"}}>
                <AppBar title="Chat App" />  
                <MessageList messages={this.state.messages} />
                <MessageBox onSend={this.addMessage.bind(this)}/>
            </div>
        );
    }
}