import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureIndex: 0
    };
  }

  setPictureIndex(x) {
    this.setState({pictureIndex: x})
  }

  render() {
    const imageArray = ['./img/imgone.png', './img/imgtwo.jpg', './img/imgthree.jpg']

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
                  <ul className="dropdown-menu">
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

        <div style={divStyle} className="row content cover-img">
          <div className="col-xs-12 col-md-12">


            <div id="one" style={{
              "display": this.state.pictureIndex == 0
                ? "block"
                : "none"
            }}>Statement</div>
            <div id="two" style={{
              "display": this.state.pictureIndex == 1
                ? "block"
                : "none"
            }}>We can help</div>
            <div id="two" style={{
              "display": this.state.pictureIndex == 2
                ? "block"
                : "none"
            }}>The peeps</div>
          </div>
        </div>
      </div>
    )
  }
}
