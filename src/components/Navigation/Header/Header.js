import React from 'react';
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
import SeachComponent from '../../SearchComponent/SearchComponent'

class Header extends React.Component {
  state = {
    anchorEl: null,
    webData: [],
    lexcenData: [],
    search: ''
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleProfileMenuClose = event => {
      this.setState({ anchorEl: null})
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  autoCompleteHandler = () => {
    if(this.state.webData.length>0){
      return "Test"
    }
  }

   

  render() {
    const { anchorEl } = this.state;
    const { currentUser } = this.props;
    const userName = currentUser.firstName + ' ' + currentUser.lastName;
    const role = currentUser.role;

    const email = currentUser.email;
    const isMenuOpen = Boolean(anchorEl);
    const initalCharacter = userName.substring(0, 1);

    const renderMenu = (
      <Menu style = {{ 'width': '100%', 'top': '50px'}}
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
        <button>Sign Out</button>
        </MenuItem>
        
      </Menu>
    );
    

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
                    <SeachComponent />
              </div>
            </div>
            <div className="account-section header-col">           
             <UserAvatar 
             clicked = { this.handleProfileMenuOpen }
             initalCharacter = { initalCharacter } />
            </div>           
          </Toolbar>
        </AppBar>
        <div className = "render-menu">
        {renderMenu}
        </div>
      </div>
    );
  }
}

export default Header;