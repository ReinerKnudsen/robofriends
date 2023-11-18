import React from "react";


// Every time the input changes (onChange), call the "searchChange" function -> App
const SearchBox = ( { searchfiled, searchChange }) => {
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search robots' 
				onChange = {searchChange}
			/>
		</div>
	)
}

export default SearchBox;