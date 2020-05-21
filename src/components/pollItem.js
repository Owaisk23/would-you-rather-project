import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import '../css/App.css';

class PollItem extends Component {

    
  render() {
    const { question, navURL } = this.props;
    return (
        <div className="pollItemContainer">
            <Paper className="pollItemPaper">
                <div className="pollItemBoxHeader">
                    {question.authorName} asks:
                </div>
                <div className="pollItemControls">
                    <Grid container spacing={16}>
                    
                        <Grid item xs={4} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={question.avatar} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div className="pollItemSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} container direction="column">
                            <Grid item >
                                <div className="pollItemMainTitle">
                                    Would you Rather....
                                </div>
                            </Grid>
                            <Grid item>
                                <div>
                                    ..{question.optionOne.text}...
                                </div>
                            </Grid>
                            <Grid item >
                                <Button variant="contained" color="inherit" className="pollItemFormControl" component={Link} to={navURL}>View Poll</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
  }
}


function mapStateToProps({authedUser, questions, users}, { id }) {
    const question = questions[id];

    return {
        authedUser,
        question: formatQuestion(question,users[question.author],authedUser),
        navURL: users[authedUser].answers[id]? `pollresult/${question.id}` : `/question/${question.id}`
    }
}

export default connect(mapStateToProps)(PollItem);
