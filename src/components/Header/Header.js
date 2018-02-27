import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <span className="HeaderTitle"><h1>Quizzy </h1>

        </span>
        <span className="HeaderTitle"><h1>  {this.props.uname !== '' ? `Hello  ${this.props.uname}` : ''} </h1>

        </span>

      </div>);
  }
}
Header.defaultProps = {
};
Header.propTypes = {
};
const mapStateToProps = state => ({

  uname: state.quiz.uname,

});
export default connect(mapStateToProps, null)(Header);
