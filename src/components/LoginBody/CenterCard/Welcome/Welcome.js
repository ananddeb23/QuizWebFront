import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <p className="WelcomeBlack">Welcome  </p>
        <p className="WelcomeBlack">to </p>
        <p className="WelcomeWhite">Quizzy! </p>

      </div>
    );
  }
}
Welcome.defaultProps = {
};
Welcome.propTypes = {
};
export default Welcome;
