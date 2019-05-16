import React from 'react';
import './Detect.css'

const Detect = ({ onInputChange, onButtonClick }) => {
	return (
		<div >
			
			<div className='f4 center pt3 pb3 form shadow-5 '>
				<div className=' pa2 center'>
					<input 	className=' w-70 center z-1'
							type='text'  
							placeholder='insert image URL(jpg) here'
							onChange={onInputChange}
					/>
					<button	className='w-30 link button grow pv white bg-black'
							onClick = {onButtonClick}
							> Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default Detect;

