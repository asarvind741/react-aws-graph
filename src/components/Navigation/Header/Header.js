import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
	DataSearch
} from '@appbaseio/reactivesearch';
import './Header.css';
import logo from '../../../asstes/Lexxcen_logo-0.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import webData from '../../../data/elastic-search.json';
import SearchWebs from '../../../components/SearchWeb/SearchWebs';




class Header extends React.Component {
  state = {
    anchorEl: null,
    webData: [],
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
    this.handleMobileMenuClose();
  };

  inputChangehandler = event => {
    this.setState({
      webData: []
    })
    let data = [];
    this.setState({
      search: event.target.value
    }, () => {
      webData.forEach(item => {
        const title = item.title;
        const check = this.state.search;
        if(title.toLowerCase().indexOf(check)>=0){
          data.push(item)
          this.setState({webData: data})
        }
      }, () => {
        this.setState({webData: data})
      })
    }); 
    

    
  }

  

  render() {
    const { anchorEl } = this.state;
    const { currentUser } = this.props;
    const userName = currentUser.firstName + ' ' + currentUser.lastName;
    const role = currentUser.role;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu style = {{ 'width': '100%'}}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
        onMouseOut = { this.handleProfileMenuClose }>
        <Typography className = "user-name-header">
          <strong>{ userName}</strong>
        </Typography>
        <Typography className = "user-name-header">
          { role }
        </Typography>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        
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
                    <Input
                        className = "Serach"
                        placeholder="Search…"
                        disableUnderline
                        onChange = { this.inputChangehandler }
                    />
                    <span className="search-icon"><SearchIcon /></span>
                    {(this.state.webData && this.state.search != '') ?
                    <ul className="search-reasult">
                     <SearchWebs 
                     staticData = { this.state.webData }
                     searchTerm = { this.state.search} />
                    </ul>
                    : ''}
              </div>
            </div>
            <div className="account-section header-col">           
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onMouseOver={this.handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
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