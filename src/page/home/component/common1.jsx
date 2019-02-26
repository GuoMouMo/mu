import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { content } = this.props;
        return(
            <button onClick={() => { console.log(content); }}>点击</button>
        )
    }
}

export default Button;
