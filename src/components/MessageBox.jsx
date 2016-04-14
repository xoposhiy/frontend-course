import React from 'react';
import {format} from '../emoji.js';
import styles from './Message.css';
import {CardText, FlatButton, Card} from 'material-ui';

export default class MessageBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    onTextChange(event) {
       this.setState({ text: event.target.value });
    }
    onKeyUp(event) {
        if (event.keyCode == 13){
            this.sendMessage();
            event.preventDefault();
        }
            
    }
    
    sendMessage() {
        if (this.props.onSend){
            this.props.onSend(this.state.text);
            this.setState({text : ""});
        }
    }

    render() {
        return (
            <Card style={{padding: 10}}>
                <textarea 
                    value={this.state.text}
                    onChange={this.onTextChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)} 
                    style={{
                        width:'100%',
                        borderColor: '#ddd'
                    }} />
                <FlatButton 
                    label="Send"
                    onClick={this.sendMessage.bind(this)}
                    primary={true}
                     />
            </Card>);

    }
}