import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Logo from './comp/Logo/Logo.js';
import SignOut from './comp/SignOut/SignOut.js';
import Detect from './comp/Detect/Detect.js';

import Face from './comp/Face/Face.js';
import SignIn from './comp/SignIn/SignIn.js';
import Register from './comp/Register/Register.js';
import Rank from './comp/Rank/Rank.js'



const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density:{
        enable: true,
        value_area: 700
      }
    } 
  },
    interactivity:{
      detect_on:'canvas',
      events:{
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
}


// const initialState = {
	
// }

class App extends Component {
	constructor() {
		super();
		this.state = {
		input: '',
		imageUrl: '',
		box: { },
		route: 'signin',
		user: {
		id: '',
		name:'',
		email: '',
		entries: 0,
		joined: ''
	}
		};
	}

	loadUser = (data) => {
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
			entries: data.entries,
			joined: data.joined
		    }
		})
	}

	// componentDidMount() {
	// 	fetch('http://localhost:3000')
	// 	 .then(response => response.json())
	// 	 .then(console.log)
	// } don't need it cause we have cors

	onInputChange = (event) => {
		this.setState(
			{input: event.target.value}, 
			() => {console.log(this.state.value)}
		) 	
	}

	calculateBox = (data) => {
		const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box
		const image = document.getElementById('inputimage')
		const height = Number(image.height);
		const width = Number(image.width)
		return {
			top_row: clarifaiface.top_row * height,
			left_col: clarifaiface.left_col * width,
			bottom_row: height - (clarifaiface.bottom_row * height),
			right_col: width - (clarifaiface.right_col * width)
		}
	}

	DisplayBox = (box) => {
		this.setState({box: box})
	}

	onButtonClick = () => {
		this.setState({imageUrl : this.state.input});
		fetch('https://intense-brushlands-30025.herokuapp.com/imageurl', {
 			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				input: this.state.input
			})
		})
		.then( response => response.json())
		.then( response => {
	      if (response) {
	     	fetch('https://intense-brushlands-30025.herokuapp.com/image', {
	 			method: 'put',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					id: this.state.user.id,
 				})
	     })
	     	.then(response => response.json())
	     	.then(count => {
	     		this.setState(Object.assign(this.state.user, {entries: count}))
	     	})
	     	.catch(console.log)
	     }
		 this.DisplayBox(this.calculateBox(response))
		})
	    .catch(err => console.log(err));
	}

	onRouteChange = (route) => {
		// if (route === 'signin') {
		// 	this.setState(initialState)
		// }
		this.setState({ route: route})
	}

  render() {
  	const {onInputChange, onButtonClick, onRouteChange, loadUser} = this;
  	const {imageUrl, box, route} = this.state;
    return (

    	<div className='App'>

	        <Particles className='particles'
	         		   params={ particlesOptions }/> 
	        <Logo />
	       
	        { route === 'home'
	         	? 	<div> 
						<SignOut onRouteChange={onRouteChange}/>
						<Rank name={this.state.user.name}
							  entries={this.state.user.entries}/>

				        <Detect onInputChange={onInputChange}
				        	    onButtonClick={onButtonClick}/>
				    	<Face imageUrl= {imageUrl}
				    		  box = {box}/>
			    	</div> 
	        
				:  ( route ==='signin' 
				 	?  <SignIn   onRouteChange={onRouteChange}
				 				 loadUser = {loadUser} />
		        	:  <Register onRouteChange={onRouteChange}
		        				 loadUser = {loadUser} />
				)
       		}
      	</div>
    );
  };
}

export default App;
