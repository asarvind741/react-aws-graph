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
        confirmNewPassword: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        console.log("sssssssss", event.target)
        this.setState({
            isLoading: true
        });

        console.log("this state1", this.state.newPassword);
        console.log("this state2", this.state.confirmNewPassword)
        const currentUser = this.props.currentUser[0];
        console.log("this state223", currentUser)
        

        if(this.state.newPassword === this.state.confirmNewPassword){
            
            console.log("current user", currentUser)
            Auth.completeNewPassword(currentUser, this.state.newPassword, currentUser.challengeParam.requiredAttributes)
            .then(user => {
                if(user){
                    this.props.history.push('/home')
                }
            })
        }
    }




    render (){
        return (
            <Changepasswordcomponent
            oldPassword = { this.state.oldPassword }
            newPassword = { this.state.newPassword }
            confirmNewPassword = { this.state.confirmNewPassword }
            changed = { this.handleChange }
            submit = { this.handleSubmit } 
            />
        )
    }
}

function mapStateToProps(state){
    console.log("state", state.currentUser)
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Changepassowrd);