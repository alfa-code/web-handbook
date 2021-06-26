import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Src/client/app/app';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import 'prismjs/themes/prism-coy.css';

import './breakpoints.scss';
import './global.scss';

ReactDOM.render(<App />, document.getElementById('react-app') || document.querySelector('body'));
