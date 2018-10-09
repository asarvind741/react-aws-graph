import React from 'react';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';
import Changepasswordcomponent from '../../components/Changepassowrd/Changepassword';
import './Changepassword.css';
import { connect } from 'react-redux';


class Changepassowrd extends React.Component {
    state = {
        isLoading: false,
        oldPassword:'',
        newPassword: '',
        confirmNewPassword: '',
        errors: null,
        currentUser:this.props.currentUser[0]
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    componentWillMount(){
        if(!this.state.currentUser){
            this.props.history.push("/")
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true
        });
        const currentUser = this.props.currentUser[0];
        if(currentUser){
        if(this.state.newPassword === this.state.confirmNewPassword){
            
            Auth.completeNewPassword(currentUser, this.state.newPassword, currentUser.challengeParam.requiredAttributes)
            .then(user => {
                if(user){
                    this.props.history.push('/home')
                }
            })
            .catch(e =>{
                // alert(e.message)
               let error = (e.message).split(":").pop()
                this.setState({errors: error})
                // this.props.history.push('/');
            })
        }
        else {
            this.setState({
                errors: "Password don't match"
            })
            // this.props.history.push("/");
        }

        this.setState({isLoading: false})
    }
    else {
        this.props.history.push("/");
    }
}




    render (){
        if(this.state.isLoading){
            return <Spinner />
        }
        else {
        return (
            <Changepasswordcomponent
            oldPassword = { this.state.oldPassword }
            newPassword = { this.state.newPassword }
            confirmNewPassword = { this.state.confirmNewPassword }
            changed = { this.handleChange }
            submit = { this.handleSubmit } 
            errors = { this.state.errors }
            />
        )
        }
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Changepassowrd);