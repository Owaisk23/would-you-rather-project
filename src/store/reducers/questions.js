import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';


export default function questions (state = {}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS : 
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id] : question,
            }
        case ADD_ANSWER:
            const { answer } = action;
            return {
                ...state,
                [answer.qid] : {
                    ...state[answer.qid],
                    [answer.answer] : {
                        ...state[answer.qid][answer.answer],
                        votes : state[answer.qid][answer.answer].votes.concat([answer.authedUser])
                    }
                }
            }
        default :
            return state;
    }
}