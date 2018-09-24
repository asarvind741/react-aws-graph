import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Menu from '../../UI/Menu/Menu';

import './NavigationItem.css';

class NavigationItem extends React.Component {

    state = {
        showMenu: false
    }



    render(){

    const renderSubmenu = (event) => {
        event.preventDefault();
      this.setState((prevState) => {
          return { showMenu: !prevState.showMenu}
      })  
    }

    if(this.props.link === "/close-menu")
    {
        return (
                <li className = "NavigationItem"
                    exact={this.props.exact}
                    // onClick = { this.props.selected }
                    >
                    {this.props.children}
                     <KeyboardArrowUp className = "close-icon" />
                    
                </li>
            )
    }
    
    
    return (
        <li className = "NavigationItem"
            exact={this.props.exact}
            // onClick = { this.props.selected }
            onMouseOver = { renderSubmenu }
            onMouseLeave = {renderSubmenu }>
            {this.props.children}
            {/* {(this.state.showMenu) ? <Menu 
            className = "sub-menu-class"
            items = {this.props.subMenu} />: '' } */}
            {(this.state.showMenu) ? <Menu className = "sub-menu"
            items = { this.props.subMenu} /> : '' }
    </li>
    )
}
};

export default NavigationItem;