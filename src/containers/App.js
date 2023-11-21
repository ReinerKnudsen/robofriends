import React, {useState, useEffect } from "react";
import CardList from "../components/CardList.js";
//import { robots } from './robots.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';

function App() {
	// const [value, manipulator] = useState(initialState)
	// Array destructuring
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')

	// useEffect is always triggered, when the App component renders; describes a side effect
	// We add an additional parameter [] which tells the hook to only run, wenn this parameter
	// changes. Since [] doesn't change, it will only run once!
	useEffect( () => {
		// fetch opens an asyncronous communication path to the URL
		fetch('https://jsonplaceholder.typicode.com/users')
		// fetch issues a promise, which we need a _then_ for
			.then(response => response.json())
			.then(users => {setRobots(users)});
	},[])

	const onSearchChange = (event) => setSearchfield(event.target.value)

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())	});

	return !robots.length ? 
		<h1>Loading...</h1> : 
		(<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange = {onSearchChange}/>
			<Scroll>
				<CardList robots = {filteredRobots} />
			</Scroll>
				</div>)
}

export default App;