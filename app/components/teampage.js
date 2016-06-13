import React from 'react';

export default class TeamPage extends React.Component {
  render() {
    return (
        <div className="inheritHeight team-page">
          <div className="row inheritHeight">
            <div className="col-md-4 inheritHeight div-setup left-div">.col-md-4</div>
            <div className="col-md-4 col-md-offset-4 inheritHeight div-setup right-div">.col-md-4 .col-md-offset-4</div>
          </div>
        </div>
    )
  }
}
