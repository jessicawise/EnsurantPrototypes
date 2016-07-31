import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
        <div className="row content full-height">
          <div className="col-xs-12 col-md-12 insideDiv full-height">

            <div className="animated fadeIn">
              <h3 className="homeText">Home + Insurance =</h3>
              <img className="House" src="./img/House.png"/><img className="Heart animated infinite pulse" src="./img/Heart.png"/>
              <Link to = "/about"><button type="button" className="btn btn-lg btn-success home-button" >Learn More Now!</button></Link>
          </div>
          </div>
        </div>
    )
  }
}
