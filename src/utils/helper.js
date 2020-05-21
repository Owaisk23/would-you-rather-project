export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
  
    return {
      authorName: name,
      id,
      timestamp,
      avatar: avatarURL,
      optionOne,
      optionTwo
    }
  }

export function calculateUserScore(user){
    return Object.keys(user.answers).length + user.questions.length;
}