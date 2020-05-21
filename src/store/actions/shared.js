import { getInitialData } from '../../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { showLoading, hideLoading  } from "react-redux-loading";

export function handleIntialData(){
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            })
    }
}
