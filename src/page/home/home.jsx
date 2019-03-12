import React, { Component } from 'react';
import './home.scss';
import Button from './component/common1';

class Home extends Component {
    render() {
        return(
            <div className="home">
                hellow world
                <Button content="跳转" />
            </div>
        )
    }
}

export default Home;
