import React from 'react';
import { Signup } from 'aws-amplify-react'


class MySignup extends React.Component {

    render(){
        return (
            <div>
                <form>
                    <div className = "">
                        <label>Firs Name</label>
                        <input type = "text" placeholder = "Enter First Name.." />
                        <label>Last Name</label>
                        <input type = "text" placeholder = "Enter First Name.." />
                        <label>email</label>
                        <input type = "text" placeholder = "Enter First Name.." />
                        <label>Password</label>
                        <input type = "text" placeholder = "Enter First Name.." />
                        <label>Phone Number</label>
                        <input type = "text" placeholder = "Enter First Name.." />
                    </div>
                </form>
            </div>
        )
    }
}

export default MySignup;