import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from './home.js';

// DO NOT ReMOVE
require('bootstrap-webpack!./bootstrap.config.js');

// add CSS in order of load, same as in index.html
require('./css/main.css');
require('./css/animate.min.css');


injectTapEventPlugin();


ReactDOM.render(<Home />, document.getElementById('app'));
