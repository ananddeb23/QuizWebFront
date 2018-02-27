import React from 'react';
import PropTypes from 'prop-types';
import './LoginBody.css';
import CenterCard from './CenterCard/CenterCard';

class LoginBody extends React.Component {
  render() {
    return (<div className="LoginBody">
      <CenterCard />

            </div>);
  }
}
LoginBody.defaultProps = {
};
LoginBody.propTypes = {
};
export default LoginBody;
