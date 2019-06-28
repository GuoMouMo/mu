import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import configureStore from './redux/configureStore';
import App from './App';
import './index.scss';

const store = configureStore();

loadableReady(() => {
    const app = document.getElementById("app");

    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        app,
    );
});
