import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleIntialData  } from "../store/actions/shared";
import Routers from '../routes'

import '../css/App.css';

class App extends Component {

    componentDidMount(){
        this.props.initilizeData();
    }

    render() {
        return (
            <div>
                <Routers/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initilizeData: () => {
            dispatch(handleIntialData());
        }
    };
}

export default connect(null, mapDispatchToProps)(App);
