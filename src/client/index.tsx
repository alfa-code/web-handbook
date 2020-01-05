import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Src/client/app/app';

import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './global.scss';

const AppWithRouter = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.hydrate(AppWithRouter, document.getElementById('react-app') || document.querySelector('body'));
