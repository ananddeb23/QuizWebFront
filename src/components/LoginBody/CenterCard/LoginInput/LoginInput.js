import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getQuestions } from '../../../../redux/actions';
import PropTypes from 'prop-types';
import './LoginInput.css';


const urltoreq = '/getQuestions';
class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    // this.handletextchange = this.handletextchange.bind(this);
  }
    updatetextchange = (evt) => {
      const textnew = evt.target.value;
      // alert(textnew);
      this.setState({ text: textnew });
    }
  handlelogin = (evt) => {
    // const urlreq = urltoreq + this.state.text;
    axios.get(urltoreq)
      .then((response) => {
        console.log(response);
        // const obj = { questions: response.data, uname: this.state.text };
        const ar = [response.data, this.state.text];
        this.props.getQuestions(ar);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch(urltoreq)
    //   .then((response) => {
    //     console.log(response);
    //     response.text().then((notes) => {
    //       console.log(JSON.parse(notes));
    //       const notesparsed = JSON.parse(notes);
    //       // this.props.getNotes(notesparsed);
    //       const obj = { questions: notesparsed, uname: this.state.text };
    //       this.props.getQuestions(obj);
    //     });
    //   });
    // fetch(urltoreq)
    //   .then((response) => {
    //     console.log('response', response);
    //     response.text().then((questions) => {
    //       console.log((questions));
    //       // const questionsparsed = JSON.parse(questions);
    //       const obj = { questions, uname: this.state.text };
    //       this.props.getQuestions(obj);
    //     });
    //   });
  }
  render() {
    return (
      <div className="LoginInput">
        <p className="LoginText">Login </p>
        <br /><br /> <br /><br />
        <p> {'\n\n\n\n\n\n\n'}</p>
        <p className="LoginLabel">Username </p>
        <center>  <input className="LoginInputArea" type="text" value={this.state.text} onChange={this.updatetextchange} />
          <br /><br /> <br /><br />
          <p> {'\n\n\n\n\n\n\n'}</p>
          <button className="LoginButton" onClick={this.handlelogin}> Login</button>
        </center>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getQuestions: ques => dispatch(getQuestions(ques)),

});
LoginInput.defaultProps = {
};
LoginInput.propTypes = {
};
export default connect(null, mapDispatchToProps)(LoginInput);
