import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'
import App from './app.js';
import AboutPage from './components/aboutpage.js'
import Contact from './components/contact.js'

// DO NOT ReMOVE
require('bootstrap-webpack!./bootstrap.config.js');

// add CSS in order of load, same as in index.html

require('./css/main.css');
require('./css/animate.min.css');
require('./css/home.css');
require('./css/about.css');
require('./css/contact.css')


injectTapEventPlugin();


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
