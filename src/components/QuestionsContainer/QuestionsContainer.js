import React from 'react';
import { connect } from 'react-redux';
import { getScore } from '../../redux/actions';
import axios from 'axios';
import PropTypes from 'prop-types';
import './QuestionsContainer.css';


//  Make the button visible nlw that you know when 12 are done and calculate score


const urltoreq = '/updateResponse/';
const getprev = '/getPreviousReponse/';
const calcscore = '/calculateScore/';
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderval: [],
      countSelected: 0,
      questionidstore: [],
      showbutton: true,
    };
  }
  handleCalculate= (evt) => {
    // alert('here me');
    // const textnew = evt.target.value;
    // const textid = evt.target.name;
    const requrl = `${calcscore + this.props.uname}`;
    axios.get(requrl)
      .then((response) => {
        const res = [response.data, 'showscores'];
        this.props.getScore(res);
      }).catch((error) => {
        console.log(error);
      });
  }
    handleChange = (evt) => {
      const textnew = evt.target.value;
      const textid = evt.target.name;
      if (evt.target.checked === 'true') {
        evt.target.checked = 'false';
      } else {
        evt.target.checked = 'true';
      }
      // alert(`${evt.target.name} ${evt.target.value}`);
      // alert(textnew);
      const requrl = `${urltoreq + this.props.uname}/${textid}/${textnew}`;
      axios.get(requrl)
        .then((response) => {
          console.log(response);
          let newunique = this.state.questionidstore;
          newunique.push(parseInt(textid));
          newunique = newunique.filter(onlyUnique);
          console.log(newunique);
          if (newunique.length >= 8) {
            this.setState({ showbutton: false });
          } else {
            this.setState({ questionidstore: newunique });
          }
        //   const newcount = this.state.countSelected + 1;
        //   this.setState({ countSelected: newcount });
        }).catch((error) => {
          console.log(error);
        });
    }
    componentDidUpdate() {
      // alert(this.state.questionidstore.length);
      if (this.state.showbutton === false) {
        // alert('done!!');
      }
    }
    componentDidMount() {
      // console.log('hi');


      const requrl = getprev + this.props.uname;
      axios.get(requrl)
        .then((response) => {
          console.log(response.data);
          const idlist = [];
          const renderquest = [];
          for (let i = 0; i < this.props.questions.length; i++) {
            const checkbox = [];
            let nomatch = 1;
            const optionsarr = this.props.questions[i].options;
            for (let k = 0; k < response.data.length; k++) {
              idlist.push(response.data[k].questionId);
              if (response.data[k].questionId === this.props.questions[i].questionId) {
                nomatch = 0;
                for (let j = 0; j < optionsarr.length; j++) {
                  if (optionsarr[j] === response.data[k].answer) {
                    // alert(optionsarr[j]);
                    const valradio = <div><input type="radio" value={optionsarr[j]} name={this.props.questions[i].questionId} onChange={this.handleChange} checked /> {optionsarr[j]} <br /></div>;
                    checkbox.push(valradio);
                  } else {
                    const valradio = <div><input type="radio" value={optionsarr[j]} name={this.props.questions[i].questionId} onChange={this.handleChange} /> {optionsarr[j]} <br /></div>;
                    checkbox.push(valradio);
                  }
                }
              }
            }
            if (nomatch === 1) {
              for (let j = 0; j < optionsarr.length; j++) {
                const valradio = <div><input type="radio" value={optionsarr[j]} name={this.props.questions[i].questionId} onChange={this.handleChange} /> {optionsarr[j]} <br /></div>;
                checkbox.push(valradio);
              }
            }


            // console.log(optionsarr);

            const val = (
              <div className="QuestionOuter">
                <div className="QuestionHeader"> Question {`  ${i + 1}`}</div>
                <div className="QuestionContent"> {this.props.questions[i].question}</div>

                <div className="QuestionOptions"> {checkbox}</div>
              </div>);
            renderquest.push(val);
          }
          const unique = idlist.filter(onlyUnique);
          let showbtn = true;
          if (response.data.length >= 8) {
            showbtn = false;
          }
          this.setState({
            renderval: renderquest, countSelected: response.data.length, questionidstore: unique, showbutton: showbtn,
          });
        }).catch((error) => {
          console.log(error);
        });
    }
    render() {
    //   const renderquest = [];
    //   for (let i = 0; i < this.props.questions.length; i++) {
    //     const checkbox = [];
    //     const optionsarr = this.props.questions[i].options;
    //     console.log(optionsarr);
    //     for (let j = 0; j < optionsarr.length; j++) {
    //       const valradio = <div><input type="radio" value={optionsarr[j]} name={this.props.questions[i].questionId} onChange={this.handleChange} /> {optionsarr[j]} <br /></div>;
    //       checkbox.push(valradio);
    //     }
    //     const val = (
    //       <div className="QuestionOuter">
    //         <div className="QuestionHeader"> Question {`  ${i + 1}`}</div>
    //         <div className="QuestionContent"> {this.props.questions[i].question}</div>

    //         <div className="QuestionOptions"> {checkbox}</div>
    //       </div>);
    //     renderquest.push(val);
    //   }
    //   if (this.state.renderval.length === 0) {
    //     return <div className="QuestionsContainer">{renderquest}</div>;
    //   }

      return (<div className="QuestionsContainer">{this.state.renderval}
        <div className="CalculateButtonHold"> <button className="CalculateButton" disabled={this.state.showbutton} onClick={this.handleCalculate}> Calculate </button></div>
      </div>);
    }
}
QuestionsContainer.defaultProps = {
};
QuestionsContainer.propTypes = {
};
const mapStateToProps = state => ({
  questions: state.quiz.questions,
  uname: state.quiz.uname,

});
const mapDispatchToProps = dispatch => ({
  getScore: score => dispatch(getScore(score)),

});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
