import React from 'react';
import LoginComponent from '../../components/Login/Login';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import { saveCurrentUser } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import aes256 from 'aes256';
import { successMessage, errorMessage, warningMessage, infoMessage } from '../../actions/index';

import './Login.css';

class Login extends React.Component {

    state = {
        isLoading: false,
        email: '',
        password: '',
        rememberMe: false,
        cipher: null
    }

    async componentWillMount() {
        const currentUser = await Auth.currentUserInfo();
        console.log("scurrrrrrrrrrrrrr", currentUser)
        var key = 'my passphrase';
        var cipher = aes256.createCipher(key);
        this.setState({
            cipher: cipher
        });

       let rememberMe = localStorage.getItem('rememberMe') ?  localStorage.getItem('rememberMe'): false
       
       if(rememberMe){
        let email = localStorage.getItem('email') ? localStorage.getItem('email'): '';
        let password = localStorage.getItem('password') ? cipher.decrypt(localStorage.getItem('password')): '';
        this.setState({
            email: email,
            rememberMe: rememberMe,
            password: password
         })
       }
       
    }

    // async shouldComponentUpdate(nextProps, nextState){
    //     // console.log("propsssssssssss", this.props === nextProps);
    //     return true;
    // }


    validateForm = () =>{
        return this.state.email.length>0 && this.state.password.length>0
    }


    handleChange = event => {
        if(event.target.id === "rememberMe"){
            this.setState({
                [event.target.id]: event.target.checked
            })
        }
        else {
		this.setState({
			[event.target.id]: event.target.value
        });
    }
    };
    
    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true});
        try {
           Auth.signIn(this.state.email, this.state.password)
            .then(user => {
                
                if(this.state.rememberMe === true){
                    localStorage.setItem('email', this.state.email);
                    localStorage.setItem('password', this.state.cipher.encrypt(this.state.password))
                    localStorage.setItem('rememberMe', this.state.rememberMe)
                    user.getSession(function (err, session) {
                    user.setDeviceStatusRemembered({
                        onSuccess: function (result) {                           
                        },
                        onFailure: function(err) {
                            alert(err);
                        }
                    })
                   
                })
    
                }
                else if(this.state.rememberMe === false){
                    localStorage.removeItem('rememberMe');
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }
                localStorage.setItem('jwtToken', user.signInUserSession.accessToken.jwtToken);
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
            email = {this.state.email}
            password = { this.state.password }
            rememberMe = { this.state.rememberMe }
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