import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/404Page";
import Navbar from "./components/navigationBar";
import Login from "./components/login";
import NewQuestion from "./components/newQuestion";
import LeaderBoard from "./components/leaderBoard";
import ScoreCard from "./components/scoreCard";
import Question from "./components/questions";
import PollResults from "./components/pollResults";
import history from "./history";;

class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/newquestion" component={NewQuestion} />
                        <Route exact path="/leaderboard" component={LeaderBoard} />
                        <Route exact path="/pollresult/:id" component={PollResults} />
                        <Route exact path="/question/:id" component={Question} />
                        <Route exact path="/scorecard" component={ScoreCard} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default Routers;
