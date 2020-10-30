import React from 'react';
const CrackWatch = (state) => {
	return (
		<React.Fragment>
			{state.games.map((value, index) => {
				return (
					<h1 key={index}>
						Index: {index} Value: {value.name}
					</h1>
				);
			})}
		</React.Fragment>
	);
};
export default CrackWatch;
