import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', height: '74vh'}}>
			{props.children}
		</div>
	); //height: 498px
};

export default Scroll;
