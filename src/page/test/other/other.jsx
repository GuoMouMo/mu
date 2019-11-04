import React, { Component } from 'react';
import _ from 'lodash';
import './other.scss';

class Other extends Component {
  render() {
    return(
      <div className="other">
        <svg viewBox="0 0 1320 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              IV-WEB
            </text>
          </symbol>  
          <use href="#s-text" className="text" />
          <use href="#s-text" className="text" />
          <use href="#s-text" className="text" />
        </svg>
      </div>
    )
  }
}

export default Other;
