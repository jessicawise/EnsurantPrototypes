import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>
          Hello World
        </h1>
        <img src='img/Ensurant.png'></img>
        <div className='btn btn-primary'>FUCK ME</div>
        <RaisedButton label='FUCK THIS'/>
      </div>
    )
  }
}
