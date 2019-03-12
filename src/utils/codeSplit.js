import React, { Component } from 'react';
import loadable from '@loadable/component';

const loadComponent = (path) => {
    const LoadableComponent = loadable(path);
    return class LoadableDashboard extends Component {
        render() {
            return <LoadableComponent />;
        }
    }
}

export default loadComponent;
