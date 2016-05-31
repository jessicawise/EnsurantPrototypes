import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
export default class Home extends React.Component {
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

    const tooltip = (
      <Tooltip>
        <strong>Lorem Ipsum</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ultrices lacus, sed rutrum nulla rhoncus at. Maecenas vestibulum diam non ligula placerat, vitae porttitor ipsum convallis.
      </Tooltip>
    );

    const tooltipTwo = (
      <Tooltip>
        <strong><font size="5">Lorem Ipsum</font></strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ultrices lacus, sed rutrum nulla rhoncus at. Maecenas vestibulum diam non ligula placerat, vitae porttitor ipsum convallis.
      </Tooltip>
    );

    const tooltipThree = (
      <Tooltip>
        <strong>Lorem Ipsum</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Tooltip>
    );

    const tooltipFour = (
      <Tooltip>
        <strong><i>Lorem Ipsum</i></strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Tooltip>
    );

    const tooltipFive = (
      <Tooltip>
        <strong>Lorem Ipsum</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ultrices lacus, sed rutrum nulla rhoncus at.</p>
      </Tooltip>
    );

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
          <div style={divStyle} className="row content cover-img">
            <div className="col-xs-12 col-md-12">

              <div className={this.state.showHomeAnimated
                ? "animated fadeIn"
                : "Hide"}>
                <h3 className="homeText">Home + Insurance =</h3>
                <img className="House" src="./img/House.png"/><img className="Heart animated infinite pulse" src="./img/Heart.png"/>
              </div>

              <div style={{
                "display": this.state.pictureIndex == 0
                  ? "block"
                  : "none"
              }}>Statement</div>
              <div style={{
                "display": this.state.pictureIndex == 1
                  ? "block"
                  : "none"
              }}>
              <nav className="navbar navbar-fixed-top navbar-help animated fadeInDown">
                Hover over the images for more information!
              </nav>


                <img className="houseImg" src="./img/HouseImg.png"/>


                <OverlayTrigger placement="left" overlay={tooltip} overlayClassName="tooltipStyle">
                  <img className="drawing drawOne" src="./img/HouseImgTwo.png"/>
                </OverlayTrigger>

                <OverlayTrigger placement="right" overlay={tooltipTwo}>
                <img className="drawing drawTwo" src="./img/HouseImgThree.png"/>
                </OverlayTrigger>

                <OverlayTrigger placement="bottom" overlay={tooltipThree}>
                <img className="drawing drawThree" src="./img/HouseImgFour.png"/>
                </OverlayTrigger>

                <OverlayTrigger placement="right" overlay={tooltipFour}>
                <img className="drawing drawFour" src="./img/HouseImgFive.png"/>
                </OverlayTrigger>

                <OverlayTrigger placement="left" overlay={tooltipFive}>
                <img className="drawing drawFive" src="./img/HouseImgSix.png"/>
                </OverlayTrigger>
              </div>
              <div style={{
                "display": this.state.pictureIndex == 2
                  ? "block"
                  : "none"
              }}>The peeps</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
