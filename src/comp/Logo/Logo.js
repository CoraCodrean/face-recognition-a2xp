import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';

const Logo = () => {
	return (
		<div className='pa4'>
			<Tilt 	className="Tilt aspect-ratio--object " 
					options={{max: 100}}
					style={{ height: 200, 
						     width: 250 }}>
			 	<div className="Tilt-inner"> 
			 		<img style= {{ height:250,
			 					   width:250  }} 
						 src={brain}
						 alt='Logo' 
					/> 
			 	</div>
			</Tilt>
		</div>
	)
}

export default Logo;

