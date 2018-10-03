import React from 'react';
import { Auth } from 'aws-amplify';
import SignupComponent from '../../components/Signup/Signup';
import Button from '@material-ui/core/Button';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import './Signup.css';

class Signup extends React.Component {

  state = {
    isLoading: false,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    role: '',
    confirmPassword: '',
    confirmationCode: '',
    newUser: null
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState ({
      isLoading: true
    });

    try {
      const newUser = await Auth.signUp({
        username: this.state.userName,
        password: this.state.password,
        attributes: {
          'custom:firstName': this.state.firstName,
          'custom:lastName': this.state.lastName,
          'custom:role': this.state.role,
          email: this.state.email
        }
        
      });

      this.setState({newUser})
    }
    catch(e){
      alert(e.message)
    }
    this.setState({ isLoading: false})
  }


  handleConfirmationSubmit = async event => {
   

    event.preventDefault();
    try {
      await Auth.confirmSignUp(this.state.userName, this.state.confirmationCode);
      await Auth.signIn(this.state.userName, this.state.password);

			this.props.props.userHasAuthenticated(true);
			this.props.history.push('/');
    }
    catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
  }

  handleChange = async event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  validateConfirmationForm() {
		return this.state.confirmationCode.length > 0;
	}


  renderConfirmationForm = () => {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
      <div>
        <h4>Confirmation Code</h4>
        <input type = "tel"  id = "confirmationCode" value = {this.state.confirmationCode} onChange = {this.handleChange }/>
        <p>Please check mail</p>
        <Button size="small" color="primary" type = "submit">
          Submit
        </Button>
      </div>
      </form>
    )
  }

  renderForm =() =>{
    return (
      <SignupComponent 
      firstName = { this.state.firstName }
      lastName = { this.state.lastName}
      userName = { this.state.userName }
      email = { this.state.email }
      password = { this.state.password }
      confirmationCode = { this.state.confirmationCode }
      confirmPassword = { this.state.confirmPassword }
      submit = { this.handleSubmit }
      changed = {(event) => this.handleChange(event)}
      />
    )
  }

  render(){
    if(this.state.isLoading){
      return (
        <Spinner />
      )
    }
    return (
      <div className = "signup-main">
        {this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()}
      </div>
    )
  }
}

export default Signup