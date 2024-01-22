import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

import CardList from '../components/CardList.js';
//import { robots } from './robots.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';

// we return the searchField state which is used as props by the App component
const mapStateToProps = (state) => {
  return {
    // this comes from the reducer
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch the input of the user in the search field
    onSearchChange: (event) => {
      console.log(event.target.value);
      dispatch(setSearchField(event.target.value));
    },
  };
};

function App({ searchField, onSearchChange }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      // fetch issues a promise, which we need a _then_ for
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
