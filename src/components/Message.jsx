import React from 'react';
import {format} from '../emoji.js';
import styles from './Message.css';
import {ListItem, Avatar} from 'material-ui';

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = { highlighted: false };
    }

    highlight() {
        this.setState({ highlighted: true });
    }

    unhighlight() {
        this.setState({ highlighted: false });
    }

    render() {
        var classes = styles.message;
        if (this.state.highlighted) classes += " " + styles.highlighted;
        return (
            <ListItem leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/416253425504894976/pywyafC6.jpeg"/>}>
                {this.props.user}: {format(this.props.text) }
            </ListItem>);

    }
}