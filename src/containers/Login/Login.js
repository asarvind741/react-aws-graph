import React from 'react';
import LoginComponent from '../../components/Login/Login';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import './Login.css';

class Login extends React.Component {

    state = {
        isLoading: false,
        email: '',
        password: ''
    }

    validateForm = () =>{
        return this.state.email.length>0 && this.state.password.length>0
    }

    handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
    };
    
    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true});

        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.props.userHasAuthenticated(true);
            this.props.history.push('/');
        }
        catch(e){
            alert(e.message);
        }
        this.setState({isLoading:false})
    }

    render(){
        if(this.state.isLoading){
            return (
                <Spinner />
            )
        }
        return(
            <div className = "login-main">
            <LoginComponent
            changed = { this.handleChange }
            submit = { this.handleSubmit } />
            </div>
        )
    }
}

export default Login;