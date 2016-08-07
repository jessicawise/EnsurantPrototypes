import React from 'react';

export default class LoginModal extends React.Component {
  render() {
    return (
<div className = "row">
      <div className="col-md-6 modal-body-left">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/></div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/></div>

          <div className="checkbox">
            <label>
              <input type="checkbox"/>
              Remember Me
            </label>
          </div>
          <button type="button" className="btn btn-success">Login</button>
        </form>
      </div>
      <div className="col-md-6 modal-body-right">
        <h2>New to Ensurant?</h2>
        Signup now and let us help you with your home insurance!
        <br />
        <button className="signup btn btn-info">Sign Up</button>
      </div>
      </div>
    )
  }
}
