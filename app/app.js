import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureIndex: null,
      showHomeAnimated: true
    };
  }

  setPictureIndex(x) {
    this.setState({pictureIndex: x, showHomeAnimated: false})
  }

  render() {
    const imageArray = ['./img/imgone.png', './img/imgfour.jpg', './img/imgthree.jpg']

    const divStyle = {
      backgroundImage: "url( " + imageArray[this.state.pictureIndex] + ")"
    }



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
                      <a href="#" onClick={() => this.setPictureIndex(0)}>Mission Statement</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => this.setPictureIndex(1)}>How We Can Help</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => this.setPictureIndex(2)}>The Team</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid full-height">




      </div>
    </div>
    )
  }
}
