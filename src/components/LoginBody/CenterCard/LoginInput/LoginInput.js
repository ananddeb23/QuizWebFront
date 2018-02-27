import React from 'react';
import PropTypes from 'prop-types';
import './LoginInput.css';

class LoginInput extends React.Component {
  render() {
    return (
      <div className="LoginInput">
        <p className="LoginText">Login </p>
        <br /><br /> <br /><br />
        <p> {'\n\n\n\n\n\n\n'}</p>
        <p className="">Username </p>
        <center>  <input className="LoginInputArea" type="text" />
          <br /><br /> <br /><br />
          <p> {'\n\n\n\n\n\n\n'}</p>
          <button className="LoginButton"> Login</button>
        </center>
      </div>
    );
  }
}
LoginInput.defaultProps = {
};
LoginInput.propTypes = {
};
export default LoginInput;
