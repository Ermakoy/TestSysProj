const initialState = {
	testTitles: [{
		id: 0,
		title: "Тест на знание JavaScript",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed, fugit reprehenderit laborum dolores? Voluptates, consectetur, impedit quisquam id sint quam adipisci enim omnis. Repellat molestiae, nulla excepturi veritatis quia.",
		countOfQuestions: 20,
		level: "hard"
	},{
		id: 1,
		title: "Проверь свои знания ECMAScript2015",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed, fugit reprehenderit laborum dolores? Voluptates, consectetur, impedit quisquam id sint quam adipisci enim omnis. Repellat molestiae, nulla excepturi veritatis quia.",
		countOfQuestions: 15,
		level: "middle"
	},
	{
		id: 2,
		title: "Тест на знание основ CSS",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed, fugit reprehenderit laborum dolores? Voluptates, consectetur, impedit quisquam id sint quam adipisci enim omnis. Repellat molestiae, nulla excepturi veritatis quia.",
		countOfQuestions: 10,
		level: "easy"
	}]
};

function reducer(state = initialState, action) {
	return state;
}

export default reducer;