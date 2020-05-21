import React, { Component } from 'react';
import { connect } from "react-redux";
import PollItem from './pollItem';

class TabContainer extends Component {
  render() {
    return (
      <div>
        {
            this.props.questionIds.map((id) => (
                <PollItem key={id} id={id}></PollItem>
            ))
        }
      </div>
    );
  }
}

function mapStateToProps({users, questions, authedUser}, {answered}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            .filter((a)=> {
                return authedUser && (answered? users[authedUser].answers[a] : !users[authedUser].answers[a]);
            })
    }
}

export default connect(mapStateToProps,null)(TabContainer);
