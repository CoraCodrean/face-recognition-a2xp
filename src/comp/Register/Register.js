import React from 'react';



class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email: '',
			password: ''
			
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignIn = () => {
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					password: this.state.password
				})
			})
			.then(response => response.json())
			.then(user => {
				if(user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home')
				}
			})
			
			
		}


	render() {
		const { onRouteChange } = this.props;
		const { onNameChange, onPasswordChange, onEmailChange , onSubmitSignIn} = this;
		return (
		<div>
			<nav className='code f3 pr4 flex justify-end ' >
				<p className='f3 link white pointer grow'
				   onClick={ () => onRouteChange('signin')} >
				  I have an account</p>
			</nav>
			<article className="code backg center">
				<main className=" pa4 black-80">
				  <div className="flex-column-ns measure-narrow center">
				    <fieldset id="sign_up"
				    		 className="ba b--transparent ph0 mh0">
				      <legend className="white f2 fw6 ph0 mh0">Register</legend>
				            <div className="mt3">
				        <label className="db fw6 lh-copy f6"
				        	   htmlFor="name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				    		   type="text"
				    		   name="name"  
				    		   id="name"
				    		   onChange={onNameChange}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6"
				        	   htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				    		   type="email"
				    		   name="email-address"  
				    		   id="email-address"
				    		   onChange={onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" 
				        	   htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				    		   type="password" 
				    		   name="password"  
				    		   id="password"
				    		   onChange={onPasswordChange}/>
				      </div>
				    
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				     	     type="submit"
				      	     value="Sign in"
				      	     onClick = { onSubmitSignIn }/>
				    </div>
				   
				  </div>
				</main>
			</article>
		</div>
		)
	}
}

export default Register;