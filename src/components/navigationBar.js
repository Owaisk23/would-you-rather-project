import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from "../store/actions/authedUser";
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LoadingBar from "react-redux-loading";
import PropTypes from 'prop-types';

import '../css/App.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    loggedInUser: {
        marginRight: 12,
    }
};

class NavBar extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    state = {
        userId: '',
        toLogin: false,
    };

    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null));
        // add in store 
    }
    render() {
        const { classes, loggedInUser  } = this.props;
        return (
            <header>
                <AppBar position="static" >
                    <Toolbar>  
                        <div className={classes.grow}>
                            <Button color="inherit"  className="navLinkButton" component={Link} to="/home">Home</Button>
                            <Button color="inherit" className="navLinkButton" component={Link} to="/newquestion">New Question</Button>
                            <Button color="inherit" className="navLinkButton" component={Link} to="/leaderboard">Leader Board</Button>
                        </div>  
                        {
                            loggedInUser? (
                                <Fragment>
                                    <Typography variant="h6" color="inherit" className={classes.loggedInUser}>
                                        Hello {loggedInUser.name}
                                    </Typography>
                                    <Avatar alt="Remy Sharp" src={loggedInUser?loggedInUser.avatarURL:""} className={classes.avatar} />      
                                    <Button color="inherit" className="navLinkButton" onClick={this.handleLogout}>Logout</Button>    
                                </Fragment> ) : 
                                <Button color="inherit" className="navLinkButton" component={Link} to="/login">Login</Button>
                        }
                      </Toolbar>
                  </AppBar>
                <LoadingBar />
            </header>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser,
        loggedInUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(withStyles(styles)(NavBar));
