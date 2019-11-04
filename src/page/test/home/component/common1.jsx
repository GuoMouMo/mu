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
            <>
                <Link className="home-button" to="/main/about">{content}</Link>
                <Link className="home-button" to="/main/main2">main2</Link>
                <Link className="home-button" to="/main/main2/main3">main2</Link>
            </>
        )
    }
}

export default Button;
