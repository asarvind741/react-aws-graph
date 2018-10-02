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

    async componentDidMount () {

        try {
          if(await Auth.currentSession()){
            this.userHasAuthenticated(true)
          }
          
        }
        catch(e){
          if(e !== 'No current user'){
            alert(e.message)
          }
        }
        this.setState({isAuthenticating: false})
      }
    
      userHasAuthenticated = authenticated => {
        this.setState({isAuthenticated: authenticated})
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
                {React.cloneElement(this.props.children)}              
                </div>
            </Fragment>
        )
    }
}

export default Layout;