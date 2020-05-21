import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../store/actions/authedUser";
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import '../css/App.css';

class Login extends Component {

    state = {
        userId: '',
        toHome: false,
    };

    handleChange = event => {
        this.setState({ userId: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { userId } = this.state;
        this.props.dispatch(setAuthedUser(userId));
        // add in store 
        this.setState({
            userId:'',
            toHome: true
        });
    }

    render() {
        const {userIds, users} = this.props;

        if(this.state.toHome){
            return <Redirect to="/home" />
        }

        return (
            <div>
                <div className="long-loginContainer">
                    <Paper>
                        <div className="loginBoxHeader">
                            <div className="loginBoxTitle">
                                Welcome to the Would you Rather App!
                            </div>
                            <div className="loginBoxMessage">
                                Please sign in to continue
                            </div>
                        </div>
                        <div className="loginControls">
                            Sign In
                            <form>
                                <FormControl variant="filled" className="formControl">
                                    <InputLabel htmlFor="filled-user">Select User</InputLabel>
                                    <Select value={this.state.userId} onChange={this.handleChange} input={<FilledInput name="userId" id="filled-user" />} >
                                        {
                                            userIds.map((id) => (
                                                <MenuItem key={id} value={id}>
                                                    <ListItemIcon >
                                                        <img className="loginBoxImage" alt="complex" src={users[id].avatarURL} />
                                                    </ListItemIcon>
                                                    <ListItemText inset primary={users[id].name} />
                                                </MenuItem>        
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="formControl" onClick={this.handleSubmit}>Sign In</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser,
        userIds: Object.keys(users),
        users: users
    }
}

export default connect(mapStateToProps)(Login);
