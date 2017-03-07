import React from "react";
import { connect } from "react-redux";

class TestsList extends React.Component {
	constructor(props) {
		super(props);
		this.selectTest = this.selectTest.bind(this);
	}

	selectTest(testId) {
		console.log('test was selected: ' + testId);
	}

	render() {

		const countOfTests = this.props.state.testTitles.length;
		const countOfTestsString = `Тестов в системе: ${countOfTests}`;

		const tests = this.props.state.testTitles.map(test => {
			
			const countOfQuestions = test.countOfQuestions;
			const countOfQuestionsString = `Вопросов: ${countOfQuestions}`;
			
			let rusLevelText;

			switch(test.level) {
				case "easy":
					rusLevelText = "Простой тест";
					break;
				case "middle":
					rusLevelText = "Средняя сложность";
					break;
				case "hard":
					rusLevelText = "Сложный тест";
					break;
			}

			return (
				<div className="test" key={String(test.id)}>
					<h2 className="test-title" onClick={() => this.selectTest(test.id)}>{test.title}</h2>
					<div className="info">
						<span className="questions-count">{countOfQuestionsString}</span>
						<span className={`level ${test.level}`}>{rusLevelText}</span>
					</div>
					<p className="description">{test.description}</p>
				</div>
			)

		})
		return (
			<div className="tests-list">
				<nav>
					<h1>Онлайн тестирование</h1>
					<span>{countOfTestsString}</span>
				</nav>
				
				<div className="tests">{tests}</div>
			</div>
		)
	}
}

export default connect(
	state => ({ state }),
	dispatch => ({})
)(TestsList);