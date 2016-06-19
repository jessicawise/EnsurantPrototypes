import React from 'react';
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

export default class HelpPage extends React.Component {
  render() {
    const tooltip = (
      <Tooltip>
        <strong>Lorem Ipsum</strong>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ultrices lacus, sed rutrum nulla rhoncus at. Maecenas vestibulum diam non ligula placerat, vitae porttitor ipsum convallis.
      </Tooltip>
    );

    const tooltipTwo = (
      <Tooltip>
        <strong>
          <font size="5">Lorem Ipsum</font>
        </strong>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ultrices lacus, sed rutrum nulla rhoncus at. Maecenas vestibulum diam non ligula placerat, vitae porttitor ipsum convallis.
      </Tooltip>
    );

    const tooltipThree = (
      <Tooltip>
        <strong>Lorem Ipsum</strong>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Tooltip>
    );

    const tooltipFour = (
      <Tooltip>
        <strong>
          <i>Lorem Ipsum</i>
        </strong>
        <br/>
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
        <div className="help-page inheritHeight">
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
    )
  }
}
