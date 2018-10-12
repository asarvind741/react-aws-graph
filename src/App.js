import React, { Fragment} from 'react';
import Header from './components/Navigation/Header/Header';
import SideNavigation from './containers/SideNavigation/SideNavigation'
import './hoc/Layout/Layout.css';
import $ from 'jquery';
import { Auth } from 'aws-amplify';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';
import Spinner  from './components/Navigation/UI/Spinner/Spinner';
import NotificationMessage from './components/Navigation/UI/NotificationMessage/NotificationMessage';

class App extends React.Component {

    state = {
        openMeun: false,
        textSearch: '',
        user: null,
        isAuthenticated: false,
        isAuthenticating: true,
        isLoading: false
    }

    async componentWillMount (){
        this.setState({isLoading: true})
        let user;
        try {
        user = await Auth.currentUserInfo();
        this.setState({
            user: user.attributes,
            isAuthenticated: true
          });
        
        if(user){
            this.props.history.push("/home");
        }
        else {
            this.props.history.push("/");
        }
      }
        catch(e){
        }
        this.setState({isLoading:false})
        this.setState({isLoading:false})
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

    userHasAuthenticated = async authenticated => {
       let user = await Auth.currentUserInfo();
      this.setState({isAuthenticated: authenticated})

      if(authenticated === true){
          this.setState({
              user: user.attributes
          })
      }
      else {
        this.setState({
            user: null
        })
      }
    }

    signoutHandler = async event =>{
        await Auth.signOut();
        this.setState({user:null});
        this.userHasAuthenticated(false);
        this.props.history.push('/');
      }
    
    valueChangedHandler = value => {
        this.setState({
            textSearch: value
        })
    }

    render(){
       // let attachedClasses = `container static-class`;
        const childProps = {
          isAuthenticated: this.state.isAuthenticated,
          userHasAuthenticated: this.userHasAuthenticated
        };

        if(this.state.isLoading){
            return( <Spinner />)
        }
        else {
        return (
            <Fragment>
                {(this.state.isAuthenticated) ? 
                <Fragment>
                <Header 
                 open={this.state.openMenu}
                 childProps = { childProps }
                 openMenuClicked = {this.openMeunHandler } 
                 valueChanged = {(value) => this.valueChangedHandler(value) }
                 currentUser = { this.state.user }
                 signout = { this.signoutHandler }
                 /> 
                </Fragment> : null}
                <div >
                {(this.state.isAuthenticated && this.state.openMenu)?
                <div className = "expand-side-menu">
                <SideNavigation 
                 open={this.state.openMenu}
                closed={this.openMeunHandler} />
                </div>: 
                this.state.isAuthenticated ? 
                    <div className = "collapse-side-menu">
                    <SideNavigation 
                     open={this.state.openMenu}
                    closed={this.openMeunHandler} />
                    </div>: null
                 }
                 <div className = {this.state.openMenu ? 'right-side' : 'right-side-collapse'}>
                {/* <NotificationMessage /> */}
                <Routes childProps = {childProps } />
                </div>           
                </div>
            </Fragment>
        )
    }
}
}






export default withRouter(App);