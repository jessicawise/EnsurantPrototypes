import React from 'react';


export default class Contact extends React.Component {
  render() {
    return (
      <div className="row content full-height contact-div">
        <div className="col-xs-6 col-md-offset-3 jumbotron form-background">
          <h2 className="contact-text">We're Here to Help</h2>
          <div className="col-md-3 form-div">
            <form data-toggle="validator" role="form" className="form-horizontal">
              <div className="form-group">

                <div className="col-sm-12">
                  <label for="inputName3" className="control-label label-position">Name<b className="required">*</b>
                  </label>
                  <input type="text" className="form-control input-position" id="inputName3" data-error="Please enter your name" required/>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <label for="inputEmail3" className="control-label label-position">Email<b className="required">*</b>
                  </label>
                  <input type="email" className="form-control input-position" id="inputEmail3" data-error="Please enter a valid email" required/>
                  <div className="help-block with-errors"></div>
                </div>

              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <label for="inputPassword3" className="control-label label-position">Questions or Comments</label>

                  <textarea className="form-control input-position" rows="3"></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-default btn-success">Send</button>
                </div>
              </div>

            </form>
          </div>

          <div className="col-md-3 information-div map">
            Stuff goes here
          </div>
        </div>
      </div>
    )
  }
}
