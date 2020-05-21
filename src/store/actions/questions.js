import { saveQuestion, saveQuestionAnswer  } from "../../utils/api";
import { addQuestionToUser, addAnswerToUser } from "./users";
import { showLoading, hideLoading  } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

function addQuestion (question){
    return {
        type: ADD_QUESTION,
        question
    }
}

function addAnswer (answer){
    return {
        type: ADD_ANSWER,
        answer
    }
}

export function handleAddAnswer(qid, answer){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        const info = {
            authedUser,
            qid,
            answer
        }
        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(addAnswer(info));
            dispatch(addAnswerToUser(info));
            dispatch(hideLoading());
        })
    }
}


export function handleAddQuesiton(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then ((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(authedUser, question.id))
        })
        .then (() => dispatch(hideLoading()));
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}