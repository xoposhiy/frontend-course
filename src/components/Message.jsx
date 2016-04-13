import React from 'react';
import {format} from '../emoji.js';
import styles from './Message.css';

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
            <div className={classes}
                onMouseOver={() => this.highlight() }
                onMouseLeave={() => this.unhighlight() } >
                {this.props.user}: {format(this.props.text) }
            </div>);

    }
}