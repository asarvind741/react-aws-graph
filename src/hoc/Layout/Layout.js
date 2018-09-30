import React, { Fragment} from 'react';
import userList from '../../data/user.json';
import Header from '../../components/Navigation/Header/Header';
import OpenMenuDrawer from '../../components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
import './Layout.css';
import $ from 'jquery';
import { Auth } from 'aws-amplify';

class Layout extends React.Component {

    state = {
        openMeun: false,
        textSearch: '',
        user: {}
    }

    componentDidMount(){
        this.setState({
            user:userList[0]
        });
        
        this.getCurrentUserInfo();
       
        
    }

    async getCurrentUserInfo(){
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            console.log("currnet", currentUser)
        }
        catch (e) {
            console.log('get user attributes failed', e);
          }
    }

    openMeunHandler = (event) => {
        this.setState((prevState) => {
            return { openMenu: !prevState.openMenu}
        }, () => {
            if(this.state.openMenu){
                $('.container.static-class').css('width', '72%');
            }
           
            else {
                $('.container.static-class').css('width', '100%');
            }
        });
        
    }
    
    valueChangedHandler = value => {
        this.setState({
            textSearch: value
        })
    }

    render(){
        let attachedClasses = `container static-class`;

        return (
            <Fragment>
                 <Header 
                 openMenuClicked = {this.openMeunHandler } 
                 valueChanged = {(value) => this.valueChangedHandler(value) }
                 currentUser = { this.state.user }/>
                {(this.state.openMenu)?
                 <OpenMenuDrawer
                    open={this.state.openMenu}
                    closed={this.openMeunHandler} 
                    />: null}
                <div className = { attachedClasses }>
                { this.props.children }                
                </div>
            </Fragment>
        )
    }
}

export default Layout;