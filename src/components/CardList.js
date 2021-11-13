import React from 'react';
import Card from './Card';

const CardList = ({ nyanko }) => {
	return (
		<div>
			{
				nyanko.map((user, num) => (
					<Card 
					key={num} 
					id={nyanko[num].id} 
					name={nyanko[num].name} 
					email={nyanko[num].email} 
					/>
					)
				)
			}
		</div>
	);
}

export default CardList;
