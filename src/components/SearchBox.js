import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div>
		<input 
		className='pa3 ba b--green bg-lightest-blue shadow-5'
		type='search' 
		placeholder='Search Nyanko' 
		onChange={searchChange} />
		</div>
	);
}

export default SearchBox;
