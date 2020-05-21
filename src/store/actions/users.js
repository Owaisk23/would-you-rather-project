export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export function addAnswerToUser({authedUser, qid, answer}){
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestionToUser(authedUser, questionId){
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        questionId
    }
}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}