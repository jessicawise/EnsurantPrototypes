import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="row content full-height contact-div">
        <div className="col-xs-12 col-md-12 full-height">
          <div className="col-md-3 form-div">
            <form className="form-horizontal">
              <div className="form-group">

                <div className="col-sm-10">
                  <label for="inputEmail3" className="control-label label-position">Email</label>
                  <input type="email" className="form-control input-position" id="inputEmail3" placeholder="Email"/></div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <label for="inputPassword3" className="control-label label-position">Password</label>
                  <input type="password" className="form-control input-position" id="inputPassword3" placeholder="Password"/></div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <label for="inputPassword3" className="control-label label-position">Text</label>

                  <textarea className="form-control input-position" rows="3"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-default">Sign in</button>
                </div>
              </div>

            </form>
          </div>

          <div className="col-md-3 information-div">
            Stuff goes here
          </div>
        </div>
      </div>
    )
  }
}
