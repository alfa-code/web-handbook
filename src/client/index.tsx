import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Src/client/app/app';

import 'normalize.css';
import './global.scss';

ReactDOM.render(<App />, document.getElementById('react-app') || document.querySelector('body'));
