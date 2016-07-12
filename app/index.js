import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'
import App from './app.js';
import HelpPage from './components/helppage.js'
import MissionPage from './components/missionpage.js'
import TeamPage from './components/teampage.js'
import Contact from './components/contact.js'

// DO NOT ReMOVE
require('bootstrap-webpack!./bootstrap.config.js');

// add CSS in order of load, same as in index.html

require('./css/main.css');
require('./css/animate.min.css');
require('./css/home.css');
require('./css/help.css');
require('./css/mission.css');
require('./css/team.css')
require('./css/contact.css')


injectTapEventPlugin();


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/help" component={HelpPage}/>
        <Route path="/mission" component={MissionPage}/>
        <Route path="/team" component={TeamPage}/>
        <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'));
