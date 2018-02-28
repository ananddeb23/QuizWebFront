import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { playAgain } from '../../redux/actions';
import './ScoresContainer.css';


const urlscores = '/getScores';
class ScoresContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreRec: [],
    };
  }
  handlePlayAgain = (evt) => {
    this.props.playAgain();
  }
  componentDidMount() {
    axios.get(urlscores)
      .then((response) => {
        console.log(response);
        // const obj = { questions: response.data, uname: this.state.text };
        this.setState({ scoreRec: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const displayscores = [];

    for (let i = 0; i < this.state.scoreRec.length; i++) {
      let classval = 'PointOuter';
      if (this.props.uname === this.state.scoreRec[i].uname) {
        classval = 'SpecialOuter';
      }
      const val = (
        <div className={classval}>
          <span className="PointIndex">{i + 1}.</span>
          <span className="PointUname"> {this.state.scoreRec[i].uname} </span>
          <span className="PointScore"> {this.state.scoreRec[i].score }</span>
        </div>);
      displayscores.push(val);
    }
    return (
      <div className="ScoresContainer">
        <div className="ScoresHeader">
          <div className="Scorevalue">
            <div className="Orangetitle"> Your Score </div>

            <span className="Bigscore">{this.props.score}/</span>
            <span className="Smallscore">{this.props.questions.length}</span>

          </div>

        </div>
        <div className="ScoresTitle"> Leaderboard</div>
        <div className="Scores"> {displayscores}</div>
        <div className="BtnScoreContain"><button className="Playagainbtn" onClick={this.handlePlayAgain}> Play Again </button>
        </div>
      </div>);
  }
}
ScoresContainer.defaultProps = {
};
ScoresContainer.propTypes = {
};
const mapStateToProps = state => ({
  questions: state.quiz.questions,
  score: state.quiz.score,
  uname: state.quiz.uname,

});
const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(playAgain()),

});
export default connect(mapStateToProps, mapDispatchToProps)(ScoresContainer);

