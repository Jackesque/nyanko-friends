import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		// <h1>RoboFriends</h1>
		<div className='tc bg-light-green dib br3 pa3 ma3 bw2 shadow-5 grow'>
			<img alt='nyanko' src={`https://robohash.org/${id+1024}?set=set4`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;
