import React from 'react';
import ReactDOM from 'react-dom';

import { loadableReady } from '@loadable/component';

import { App } from 'Src/client/app/app';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import 'prismjs/themes/prism-coy.css';

import './breakpoints.scss';
import './global.scss';

loadableReady(() => {
    const root = document.getElementById('react-app') || document.querySelector('body');
    ReactDOM.hydrate(<App />, root)
});

// ReactDOM.hydrate(<App />, document.getElementById('react-app') || document.querySelector('body'));
