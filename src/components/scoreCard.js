import React, { Component } from 'react';
import { calculateUserScore } from "../utils/helper";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

import '../css/App.css';

class ScoreCard extends Component {

    render() {
        const { user } = this.props;
        
        return (
            <div>
                <Paper className="scoreCardContainer">
                    <Grid container spacing={16}>
                        <Grid item xs={3} alignItems="center" justify="center" container>
                            <div>
                                <img className="scoreCardImg" alt="complex" src={user.avatarURL} />
                            </div>
                        </Grid>
                        <Grid item xs={1} className="scoreCardSeparatorGrid">
                            <div className="scoreCardSeparator">
                            </div>
                        </Grid>
                        <Grid item xs={7} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs >
                                    <div className="scoreCardNameBox">
                                        {user.name}
                                    </div>
                                </Grid>
                                <Grid item xs container>
                                    <Grid xs={10} item >
                                        Answered questions
                                    </Grid>
                                    <Grid xs={2} item>
                                        {Object.keys(user.answers).length}
                                    </Grid>
                                </Grid>
                                <Grid item xs container>
                                    <Grid item xs={10}>
                                        Created questions
                                    </Grid>
                                    <Grid item xs={2}>
                                        {user.questions.length}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className="scoreCardSeparatorGrid">
                            <div className="scoreCardSeparator">
                            </div>
                        </Grid>
                        <Grid xs={2} item container direction="column" alignItems="center" justify="center">
                                <Paper className="scoreCardScorePaper">
                                    <Grid item container direction="column" className="scoreCardScoreGrid">
                                        <Grid item className="scoreCardScoreBoxHeader">
                                            Score
                                        </Grid>
                                        <Grid item alignItems="center" justify="center" container>
                                        <Badge color="secondary" className="scoreCardBadge"
                                                badgeContent={calculateUserScore(user)} >
                                            <span></span>
                                        </Badge>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}, { id }) {
    return {
        authedUser,
        user: users[id],
    }
}

export default connect(mapStateToProps)(ScoreCard);
