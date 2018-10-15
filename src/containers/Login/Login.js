import React from 'react';
import LoginComponent from '../../components/Login/Login';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import { saveCurrentUser } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { successMessage, errorMessage, warningMessage, infoMessage } from '../../actions/index';

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
           Auth.signIn(this.state.email, this.state.password)
            .then(user => {
                this.props.saveCurrentUser(user);
                if(user.challengeName === "NEW_PASSWORD_REQUIRED"){
                    this.props.infoMessage("Please change your password");
                    this.props.history.push('/change-password');
                }
                else {
                    this.props.successMessage("You are logged in!");
                    this.props.props.userHasAuthenticated(true);
                    this.props.history.push('/home');
                }
            })
            .catch(e => {
                if(e.code === "PasswordResetRequiredException"){
                    this.props.infoMessage("Please reset your password");
                    this.props.history.push("/reset-password");
                }
                else {
                   this.props.errorMessage(e.message);

                }
            })
           
        }
        catch(e){
            // alert(e.message);
            this.props.errorMessage(e.message)
        }
        this.setState({isLoading:false})
    }

    async componentWillReceiveProps(nextProps){
        if( await localStorage.getItem('token'))
        this.props.history.push('/home');
    }
    

    render(){
        if(this.state.isLoading){
            return (
                <Spinner />
            )
        }
        else {
        return(
            <div className = "login-main">
            <LoginComponent
            changed = { this.handleChange }
            submit = { this.handleSubmit } />
            </div>
        )
    }
}
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({saveCurrentUser }, dispatch);
// }


export default connect(null, {saveCurrentUser, successMessage, infoMessage, warningMessage, errorMessage})(Login);