import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import '../css/App.css';

class NotFound extends Component {
  render() {
    return (
        <div>
        <div className="notFoundContainer">
            <Paper>
                <div className="notFoundHeader">
                    <div className="notFoundTitle">
                            We are sorry!
                    </div>
                    <div className="notFoundMessage">
                        The page you are looking for is not found.
                    </div>
                </div>
                <Button variant="contained" color="inherit" className="notFoundformControl" component={Link} to={"/home"}>GoTo Home Page</Button>
            </Paper>
        </div>
    </div>
    );
  }
}

export default NotFound;
