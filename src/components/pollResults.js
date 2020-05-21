import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import '../css/App.css';

class PollResults extends Component {

    calculateOptionResult(votes, question){
        return (votes / (question.optionOne.votes.length + question.optionTwo.votes.length))*100;
    }
    render() {

    const { question, authedUser} = this.props;
        
    if(!authedUser){
        return <Redirect to="/login" />
    }

    if(!question) {
        return null;
    }

    return (
        <div className="pollResultsContainer">
            <Paper className="pollResultsPaper">
                <div className="pollResultsBoxHeader">
                    {question.authorName} asks:
                </div>
                <div className="pollResultsControls">
                    <Grid container spacing={16}>
                    
                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={question.avatar} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="pollResultsSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={8} container direction="column">
                            <Grid item >
                                <div className="pollResultsMainTitle">
                                    Results:
                                </div>
                            </Grid>
                            <Grid item className="pollResultsAnswerGrid">
                                <Paper className="pollResultsAnswerPaper">
                                    {
                                        question.optionOne.votes.includes(authedUser)?
                                        (
                                            <div className="pollResultsUserVoteDiv">
                                                Your Vote
                                            </div>
                                        ):null
                                    }
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather {question.optionOne.text}
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(this.calculateOptionResult(question.optionOne.votes.length,question))} className="pollResultsAnswerProgress" />
                                        </Grid>
                                        <Grid item className="pollResultsVoteCount" >
                                            {question.optionOne.votes.length} out of { question.optionOne.votes.length + question.optionTwo.votes.length} votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className="pollResultsAnswerGrid">
                                <Paper className="pollResultsAnswerPaper">
                                    {
                                        question.optionTwo.votes.includes(authedUser)?
                                        (
                                            <div className="pollResultsUserVoteDiv">
                                                Your Vote
                                            </div>
                                        ):null
                                    }
                                    <Grid container spacing={16} direction="column">
                                        <Grid item >
                                            Would you rather {question.optionTwo.text}
                                        </Grid>
                                        <Grid item >
                                            <LinearProgress variant="determinate" value={(this.calculateOptionResult(question.optionTwo.votes.length,question))} className="pollResultsAnswerProgress"/>

                                        </Grid>
                                        <Grid item className="pollResultsVoteCount">
                                        {question.optionTwo.votes.length} out of { question.optionOne.votes.length + question.optionTwo.votes.length} votes
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const { id } = props.match.params;
    return {
        authedUser,
        question: questions[id]? formatQuestion(questions[id],users[questions[id].author],authedUser): null
    }
}

export default connect(mapStateToProps)(PollResults);

