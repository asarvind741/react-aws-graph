import React from 'react';
import LoginComponent from '../../components/Login/Login';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import { saveCurrentUser } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
                console.log("user", user);
                this.props.saveCurrentUser(user);
                if(user.challengeName === "NEW_PASSWORD_REQUIRED"){
                    this.props.history.push('/changePassword');
                }
                else {
                    this.props.props.userHasAuthenticated(true);
                    this.props.history.push('/home');
                }
            })
           
        }
        catch(e){
            alert(e.message);
        }
        this.setState({isLoading:false})
    }
    
    // componentWillMount(){
        
    //     if(Auth.currentUserInfo()){
    //         this.props.history.push('/home');
    //     }
         
    // }

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
        return(
            <div className = "login-main">
            <LoginComponent
            changed = { this.handleChange }
            submit = { this.handleSubmit } />
            </div>
        )
    }
}


// function mapStateToProps(state){
//     return {
//         currentUser:state.currentUser
//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveCurrentUser }, dispatch);
}


export default connect(null, mapDispatchToProps)(Login);