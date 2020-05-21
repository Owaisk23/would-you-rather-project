import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuesiton } from "../store/actions/questions";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../css/App.css';

class NewQuestion extends Component {

    state = {
        optionOne:'',
        optionTwo:'',
        toHome: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {optionOne , optionTwo} = this.state;
        this.props.dispatch(handleAddQuesiton(optionOne, optionTwo));
        // add in store 
        this.setState({
            optionOne:'',
            optionTwo:'',
            toHome: true
        });
    }

    render() {

        const { toHome} = this.state;
        
        const { authedUser} = this.props;
        if(!authedUser){
            return <Redirect to="/login" />
        }
        
        if(toHome){
            return <Redirect to={"/home"} />
        }

        return (
            <div>
                <div className="long-newQuestionContainer">
                    <Paper className="long-newQuestionPaper">
                        <div className="newQuestionBoxHeader">
                            Create New Quesiton
                        </div>
                        <div className="newQuestionControls">
                            <div >
                                Complete the quesiton:
                            </div>
                            <div className="newQuestionText">
                                Would you rather...
                            </div>
                            <form>
                                <TextField
                                    id="outlined-name"
                                    label="Option One"
                                    className="newQuestionFormControl"
                                    value={this.state.optionOne}
                                    onChange={this.handleChange('optionOne')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                                <div className="newQuestionSeparator">
                                    OR
                                </div>
                                <TextField
                                    id="outlined-name"
                                    label="Option Two"
                                    className="newQuestionFormControl"
                                    value={this.state.optionTwo}
                                    onChange={this.handleChange('optionTwo')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="newQuestionFormControl" onClick={this.handleSubmit}>Submit</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
