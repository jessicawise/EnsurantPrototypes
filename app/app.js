import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import HomePage from './components/homepage.js';
import { Link } from 'react-router';
import Dialog from 'material-ui/lib/dialog';
import LoginModal from './components/loginmodal.js';

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {openLogin : false}
  }

  openLoginModal () {
    this.setState({openLogin : true})
  }

  closeLoginModal () {
    this.setState({openLogin : false})
  }

  render(){
    const actions = [
      <RaisedButton
        backgroundColor="white"
        label="Close"
        labelColor="black"
        primary={true}
        onClick={this.closeLoginModal.bind(this)}
      />,
    ];

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
              <li>
                <Link to = "/about">ABOUT US</Link>
              </li>
              <li>
                <Link to = "/contact">CONTACT US</Link>
              </li>
              <li>
                <a onClick={() => this.openLoginModal()}>LOGIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid full-height">
        {this.props.children || <HomePage></HomePage>}
      </div>

        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.openLogin}
          onRequestClose={this.closeLoginModal.bind(this)}
        >
          <LoginModal />

        </Dialog>

    </div>
  )
}
}
