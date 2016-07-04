import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import HomePage from './components/homepage.js';
import { Link } from 'react-router';

export default class App extends React.Component {
  render(){

  return (
    <div className="full-height">
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-ensurant">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img className="logo" alt="Brand" src="./img/Ensurant.png"/>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu nav-index">

                  <li>
                    <Link to = "/mission">Mission Statement</Link>
                  </li>
                  <li>
                    <Link to = "/help">How We Can Help</Link>
                  </li>
                  <li>
                    <Link to = "/team">The Team</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to = "/contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid full-height">
        {this.props.children || <HomePage></HomePage>}
      </div>
    </div>
  )
}
}
