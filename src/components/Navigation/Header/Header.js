import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Header.css';
import logo from '../../../asstes/Lexxcen_logo-0.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import UserAvatar from '../UI/UserAvatar/UserAvatar';
import SeachComponent from '../../SearchComponent/SearchComponent';
import { NavLink } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import {GET_SOLUTION_LIST } from '../../../graphql/Queries';
import { NEW_SOLUTION_SUBSCRIPTION } from '../../../graphql/Subscriptions';



import { Auth } from 'aws-amplify';

class Header extends React.Component {
  state = {
    anchorEl: null,
    webData: [],
    lexcenData: [],
    search: '',
    show: false,
    currentUser: null,
    isAuthenticated: false
  };




  handleProfileMenuOpen = event => {
    if(this.state.anchorEl === null)
    this.setState({ anchorEl: event.currentTarget });
    else
    this.setState({ anchorEl: null})
  };

  handleProfileMenuClose = event => {
      this.setState({ anchorEl: null})
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  async componentDidMount (){
  }

  async componentWillReceiveProps (nextProps){
    let currentUser;
    try {
      currentUser = await Auth.currentUserInfo().
      this.setState({currentUser: currentUser})
      
    }
    catch(e){

    }
    
  }




  render() {
    const { currentUser } = this.props;
    const { isAuthenticated, userHasAuthenticated} = this.props.childProps;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    let userName;
    let role;
    let email;
    let initalCharacter;
    let title;
    if(currentUser){
    userName = currentUser['custom:firstName'] + ' ' + currentUser['custom:lastName'];
    role = currentUser['custom:role'];
    email = currentUser.email;
    initalCharacter = userName.substring(0, 1);
    title = "Account: " + userName + "\nEmail: " + email;
    }
    
    let renderMenu;
    if(currentUser){
    renderMenu = (
      <Menu style = {{ 'width': '100%', 'top': '50px', 'height': '300px'}}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
        >
        <div className="user-details">
          <UserAvatar 
              clicked = { this.handleProfileMenuOpen }
              initalCharacter = { initalCharacter } />
          <Typography className = "user-name-header">
            <strong>{ userName}</strong>
            { email }
            <span className = "role">{ role }</span>
          </Typography>
        </div>
        <MenuItem onClick={this.handleClose} className = "signout-menu">
        <button onClick = {this.props.signout}>Sign Out</button>
        </MenuItem>
        
      </Menu>
    );
  }

    return (
      <div>
        <AppBar position="static" className = "Root">
          <Toolbar className="header-tool-bar">
            <div className="mobile-trigger header-col" onClick = { this.props.openMenuClicked} >
                <IconButton color="inherit" aria-label="Open drawer" className = "MenuButton">
                    <div className="triger-icon">
                        <MenuIcon/>
                    </div>                    
                </IconButton>
            </div>
            <div>
              <img src = { logo } alt = "logo" width = "100" />
            </div>
            <div className="header-search header-col">
                <div className="search-wrapper">
                    <AllSolutionData />
              </div>
            </div>
            <div className="account-section header-col"
            title = { title }
            >
            {(isAuthenticated && currentUser) ?
             <UserAvatar 
             mouseOverData = { this.mouseOverHandler }
             clicked = { this.handleProfileMenuOpen }
             initalCharacter = { initalCharacter } />
             :<div className = "signup-signin">
               <NavLink to = "/signup" activeClassName="active">Sign up</NavLink>
               <NavLink to = "/signin"  activeClassName="active">Sign in</NavLink>
             </div>
            }
            </div>           
          </Toolbar>
        </AppBar>
        {(currentUser) ?
        <div className = "render-menu">
        {renderMenu}
        </div>
        : null }
      </div>
    );
  }
}

const AllSolutionData = compose(
  graphql(GET_SOLUTION_LIST, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
     solutionData: props.data.listSolutions && props.data.listSolutions.items
    })
})
)(SeachComponent)

export default withRouter(Header);