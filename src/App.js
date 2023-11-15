import React, {Component} from "react";
import CardList from "./CardList.js";
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';
import './App.css';

// In order to use states, we have to change our logic from function to class
// States usually live in the parent component
// The APP now owns the state and can change it; once it is pickedup by the child (CardList)
// it becomes a prop; CardList can't change it

class App extends Component {
	constructor() {
		super();
		this.state = {
		robots: robots,
		searchfield: ''
		}
	}

	// We need this stupid syntax to make sure that "this" refers not to the calling input element,
	// but to the app here.
	onSearchChange = (event) => {
		// to UPDATE the state we always have to set it.
		// Event.target - is the input filed, .value is the text entered
		// this is where we set the searchfield
		this.setState({searchfield: event.target.value});

	}

	// We pass the onSearchChange method of this object as state to the SearchBox
	render() {
			const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<CardList robots = {filteredRobots} />
			</div>
		);
	}
}

export default App;