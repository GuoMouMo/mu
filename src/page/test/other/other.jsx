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
        <svg viewBox="0 0 200 200">
          <linearGradient x1="49.8614%" y1="22.1606%" x2="27.9778%" y2="74.79224%" id="linearGradient">
            <stop stopColor="#89eafb" offset="0%" />
            <stop stopColor="#018be4" offset="100%" />
          </linearGradient>
          <linearGradient x1="73.4072%" y1="40.9972%" x2="73.4072%" y2="74.79224%" id="linearGradient-1">
            <stop stopColor="#74c90a" offset="0%" />
            <stop stopColor="#99ff3a" offset="100%" />
          </linearGradient>
          <g fill="url(#linearGradient)">
            <path id="XMLID_2_" d="M150.1,71.8c-3.1-36.7-41.8-43.4-41.8-43.4c-34.1-4.2-48.7,21.7-48.7,21.7
              c-4.4,6.9-6,12.6-6,12.6c-25.3-2.9-39.8,16.9-39.8,16.9C-3.9,104,10,126.5,10,126.5c12.5,23,37,23.2,37,23.2
              c10.7,0,18.7-3.6,18.7-3.6c7-3.2,8.8-4.8,8.8-4.8l6-4.6c11.9-10.3,22.6-25.6,22.6-25.6C113.6,95.9,123.8,86,123.8,86
              C137.5,72.6,150.1,71.8,150.1,71.8z"/>
          </g>
          <g fill="url(#linearGradient-1)">
            <path id="XMLID_3_" d="M157.5,71.7c20.8,0.7,31.2,17.9,31.2,17.9c12.9,22.5,2.6,37.7,2.6,37.7
              c-8.5,16.2-21,19.9-21,19.9c-6.8,3.1-12.8,2.7-12.8,2.7h-104c12-1.1,18.7-5.5,18.7-5.5c6.7-3.4,13.6-9.7,13.6-9.7
              c6.2-5.7,13.8-15.1,13.8-15.1l13.5-17.7c6.3-8.8,15.1-17.4,15.1-17.4c5.5-4.7,5.5-4.7,5.5-4.7c7.4-5,10.7-6,10.7-6
              C151.2,71.4,157.5,71.7,157.5,71.7z"/>
          </g>
        </svg>
      </div>
    )
  }
}

export default Other;
