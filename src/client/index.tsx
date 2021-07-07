import React from 'react';
import ReactDOM from 'react-dom';

import { loadableReady } from '@loadable/component';

import { App } from 'Src/client/app/app';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import 'prismjs/themes/prism-coy.css';

import './breakpoints.scss';
import './global.scss';
console.log(1, document.body.innerHTML);
loadableReady(() => {
    const root = document.getElementById('react-app');
    ReactDOM.hydrate(<App />, root)
    console.log(3, document.body.innerHTML);
});
console.log(2, document.body.innerHTML);

// setTimeout(() => {
//     console.log(3, document.body.innerHTML);
// }, 1000)

// ReactDOM.hydrate(<App />, document.getElementById('react-app') || document.querySelector('body'));
