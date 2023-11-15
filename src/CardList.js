import React from "react";
import Card from './Card.js';

// the CardList receives all robots as prop
const CardList = ( { robots } ) => {
	// we create a new array that takes the return for all robots (via map)
	return(
			<div>
				{
					robots.map( (user, i) => {
						// Doing a loop we have to give each element a unique key
						return(
							<Card 
								key={i} 
								id={robots[i].id} 
								name={robots[i].name} 
								email={robots[i].email}/>
						);
					})	
				}
			</div>
		);
}

export default CardList;