import React from 'react';


class SignIn extends React.Component {
	constructor(props) {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://intense-brushlands-30025.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}
		})
		
	
	}

	render() {
		const { onRouteChange } = this.props;
		const { onEmailChange, onPasswordChange, onSubmitSignIn } = this;
		return (
			<div>
				 <nav className='f3 pr4 flex justify-end ' >
					<p className='f2 link white pointer grow'
					   onClick={ () => onRouteChange ('register')} 
					 >
					  Register
					</p>
				</nav>

				<article className=" code backg center ">
					<main className=" pa4 black-80">
					  <div className="flex-column-ns center">
					    <fieldset id="sign_up"
					    		 className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0 white">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f4"
					        	   htmlFor="email-address">Email</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					    		   type="email"
					    		   name="email-address"  
					    		   id="email-address"
					    		   onChange={ onEmailChange }/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f4" 
					        	   htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					    		   type="password" 
					    		   name="password"  
					    		   id="password"
					    		   onChange= { onPasswordChange }/>
					      </div>
					    </fieldset>
					    <div className='center flex-row-1 justify-between-l '>
						    <div className="">
						      <input className="code b ph3 pv2  input-reset ba b--black bg-transparent grow pointer f4 dib" 
						     	     type="submit"
						      	     value="Sign in"
						      	     onClick = { onSubmitSignIn }/>
						    </div>
						   
						 </div>
					  </div>
					</main>
				</article>
			</div>
		)
		
	};
}

export default SignIn;

