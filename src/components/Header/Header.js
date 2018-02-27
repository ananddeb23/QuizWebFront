import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <span className="HeaderTitle"><h1>Quizzy </h1>

        </span>
        <span className="HeaderTitle"><h1>Name </h1>

        </span>

      </div>);
  }
}
Header.defaultProps = {
};
Header.propTypes = {
};
export default Header;
