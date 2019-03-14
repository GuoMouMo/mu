import React, { Component } from 'react';
import _ from 'lodash';

class Other extends Component {
    render() {
        console.log(_.join(['123', 'asd', 'zxc']));
        return(
            <div>
                hellow world
            </div>
        )
    }
}

export default Other;
