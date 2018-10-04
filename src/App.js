import React, { Fragment} from 'react';
import Header from './components/Navigation/Header/Header';
import OpenMenuDrawer from './components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
import './hoc/Layout/Layout.css';
import $ from 'jquery';
import { Auth } from 'aws-amplify';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

    state = {
        openMeun: false,
        textSearch: '',
        user: null,
        isAuthenticated: false,
        isAuthenticating: true
    }

    async componentDidMount (){
        let user;
        try {
        user = await Auth.currentUserInfo();
          this.setState({
              user: user.attributes,
              isAuthenticated: true
            });
        }
        catch(e){
        }

        
      }

      async componentWillReceiveProps(nextProps){

          let user;
        try {
        user = await Auth.currentUserInfo();
          this.setState({
              user: user.attributes,
              isAuthenticated: true
            });
        }
        catch(e){
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

    userHasAuthenticated = authenticated => {
      this.setState({isAuthenticated: authenticated})
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
        let attachedClasses = `container static-class`;
        const childProps = {
          isAuthenticated: this.state.isAuthenticated,
          userHasAuthenticated: this.userHasAuthenticated
        };

        return (
            <Fragment>
                {(this.state.isAuthenticated) ? 
                <Fragment>
                <Header 
                 childProps = { childProps }
                 openMenuClicked = {this.openMeunHandler } 
                 valueChanged = {(value) => this.valueChangedHandler(value) }
                 currentUser = { this.state.user }
                 signout = { this.signoutHandler }/>
                {(this.state.openMenu)?
                 <OpenMenuDrawer
                    open={this.state.openMenu}
                    closed={this.openMeunHandler} 
                    />: null}
                 </Fragment> : null}
                <div className = { attachedClasses }>
                <Routes childProps = {childProps } />           
                </div>
            </Fragment>
        )
    }
}






export default withRouter(App);