import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { calculateUserScore } from "../utils/helper";
import Grid from '@material-ui/core/Grid';
import ScoreCard from "./scoreCard";

import '../css/App.css';

class LeaderBoard extends Component {

    render() {
        const { userIds, authedUser } = this.props;
        
        if(!authedUser){
            return <Redirect to="/login" />
        }
        
        return (
            <div className="leaderBoardContainer">
                <Grid container spacing={24} direction="column">
                    {
                        userIds.map((id) => (
                            <Grid key={id} item xs={12}>
                                <ScoreCard  id={id}></ScoreCard>
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </div>
        );
  }
}

function mapStateToProps({users, questions, authedUser}) {
    return {
        authedUser,
        userIds: Object.keys(users)
            .sort((a,b) => calculateUserScore(users[b]) - calculateUserScore(users[a]))
    }
}

export default connect(mapStateToProps,null)(LeaderBoard);
