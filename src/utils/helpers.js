function pollHelper(authedUser,polls,users,poll,isAnswered){
	const fullName = users[poll.author].name
	const avatar = users[poll.author].avatarURL
	const firstOption = poll.optionOne.text
	const allVotes = poll.optionOne.votes.concat(poll.optionTwo.votes)
	const answered = allVotes.includes(authedUser)
	const display = (answered === isAnswered)

	return{
		fullName,
		avatar,
		firstOption,
		answered,
		display
	}
}

export default pollHelper