/**
 * Filename: App.js
 * Author: Jose A Felix
 * Description: App component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

/** Stylesheet */
import "./App.css";

// ----------------------------------------------------------------

// Main component
class App extends React.Component {
	// Constructor
	constructor() {
		super();

		// Component state
		this.state = {
			monsterList: [], // Monsters data list
			searchKeyword: "", // The search keyword to filter monsterList
		};
	}

	// ----------------------------------------------------------------
	/** Lifecycle methods */

	// componentDidMount
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsterList: users }));
	}

	// ----------------------------------------------------------------
	/** Functions */

	/**
	 * onSearchBoxTyping function
	 * Helps to set the searchKeyword state to perform a filtering in monstersList
	 * @param {object} event  - the event triggered on user interaction
	 */
	onSearchBoxTyping = (event) => {
		this.setState({
			searchKeyword: event.target.value,
		});
	};

	// ----------------------------------------------------------------

	// Rendering component
	render() {
		const { monsterList, searchKeyword } = this.state;
		const filteredMonsters = monsterList.filter((monster) =>
			monster.name.toLowerCase().includes(searchKeyword.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				{/** Search box to perform a filtering */}
				<SearchBox
					placeholder={"Search a monster...."}
					handleChange={this.onSearchBoxTyping}
				/>

				{/** Listing mosters cards */}
				<CardList monstersList={filteredMonsters} />
			</div>
		);
	}
}

// Component export
export default App;
