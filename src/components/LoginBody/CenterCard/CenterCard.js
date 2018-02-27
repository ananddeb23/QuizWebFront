import React from 'react';
import PropTypes from 'prop-types';
import Welcome from './Welcome/Welcome';
import LoginInput from './LoginInput/LoginInput';
import './CenterCard.css';

class CenterCard extends React.Component {
  render() {
    return (<div className="CenterCard">
      <Welcome />
      <LoginInput />
            </div>);
  }
}
CenterCard.defaultProps = {
};
CenterCard.propTypes = {
};
export default CenterCard;
