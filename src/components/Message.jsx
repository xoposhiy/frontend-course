import React from 'react';
import {format} from '../emoji.js';
import {ListItem, Avatar} from 'material-ui';

export default class Message extends React.Component {
    render() {
        return (
            <ListItem leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/416253425504894976/pywyafC6.jpeg"/>}>
                {this.props.user}: {format(this.props.text) }
            </ListItem>);

    }
}