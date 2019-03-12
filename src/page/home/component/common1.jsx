import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { content } = this.props;
        return(
            <Link className="home-button" to="/program/about">{content}</Link>
        )
    }
}

export default Button;
