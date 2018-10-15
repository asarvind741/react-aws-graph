import React from 'react';
import ResetPasswordComponent from '../../components/ResetPasswordComponent/ResetPasswordComponent';
import ResetPasswordConfirmationCode from '../../components/ResetPasswordComponent/ResetPasswordConfirmationCode/ResetPasswordConfirmationCode';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import { saveCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Reset-Password.css';
import { successMessage, errorMessage, warningMessage, infoMessage } from '../../actions/index'

class ResetPassword extends React.Component {

    state = {
        isLoading: false,
        email: '',
        confirmationCode : '',
        newPassword: '',
        setNew: false
    }

    validateForm = () =>{
        return this.state.email.length>0 && this.state.password.length>0
    }

    handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
    };

    resendCodeHandler = async event => {
        try {
            Auth.forgotPassword(this.state.email)
             .then(user => {
                 this.props.infoMessage("An e-mail has been sent to you with confirmation code. Please check your e-mail")
                 this.setState({
                     setNew: true
                 })
             })            
         }
         catch(e){
             // alert(e.message);
             this.props.errorMessage(e.message)
         }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true});
        try {
           Auth.forgotPassword(this.state.email)
            .then(user => {
                this.props.infoMessage("An e-mail has been sent to you with confirmation code. Please check your e-mail")
                this.setState({
                    setNew: true
                })
            })
            .catch(e => {
               if(e.code === "UserNotFoundException")
                this.props.errorMessage("E-mail address not registered. Please enter correct email")
            })
           
        }
        catch(e){
            // alert(e.message);
            this.props.errorMessage(e.message)
        }
        this.setState({isLoading:false})
    }

    handleSubmitConfirmationWithNewPassword = async event => {

        event.preventDefault();
        this.setState({ isLoading: true});
        try {
            Auth.forgotPasswordSubmit(this.state.email, this.state.confirmationCode, this.state.newPassword)
            .then(success => {
              this.props.successMessage('Your password has been reset now. Please login to continue')
               this.props.history.push("/");
            })
            .catch(e => {
                this.props.errorMessage(e.message)
                // alert(e.message)
            })
        }
        catch(e){
            this.props.errorMessage(e.message)
            // alert(e.message);
        }
        this.setState({ isLoading: false});
    }

    async componentWillReceiveProps(nextProps){
        if( await localStorage.getItem('token'))
        this.props.history.push('/home');
    }

    renderResetPasswordEmail = () => {
        return(
            <div className = "login-main">
            <ResetPasswordComponent
            changed = { this.handleChange }
            submit = { this.handleSubmit } />
            </div>
        )
    }
    

    render(){
        if(this.state.isLoading){
            return (
                <Spinner />
            )
        }
        else {
        return (
        <div className = "reset-password-main">
        {(this.state.setNew) ? 
        <ResetPasswordConfirmationCode
         changed = { this.handleChange }
         resendCode = { this.resendCodeHandler }
         submit = { this.handleSubmitConfirmationWithNewPassword } />: this.renderResetPasswordEmail()}
        </div>
        )
    }
}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveCurrentUser }, dispatch);
}


export default connect(null, {saveCurrentUser, successMessage, errorMessage, warningMessage, infoMessage})(ResetPassword);