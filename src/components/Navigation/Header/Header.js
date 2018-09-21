import React from 'react';
import {
	DataSearch,
	SelectedFilters,
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


class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleProfileMenuOpen = event => {
      console.log("sdsds")
    this.setState({ anchorEl: event.currentTarget });
  };

  handleProfileMenuClose = event => {
      this.setState({ anchorEl: null})
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu 
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
        onMouseOut = { this.handleProfileMenuClose }>
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
						  <DataSearch className = "data-search-class"
							dataField={['original_title', 'original_title.search']}
							categoryField="authors.raw"
							componentId="BookSensor"
              iconPosition="right" />
					<div className="search-wrapper">
						<SelectedFilters />
					</div>
			
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
        {renderMenu}
      
      </div>
    );
  }
}

export default Header;