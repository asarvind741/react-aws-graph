import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Menu from '../../UI/Menu/Menu';

import './NavigationItem.css';

const navigationItem = ( props ) => {
    if(props.link === "/close-menu")
    {
        return (
            <li className= "NavigationItem" >
                <NavLink 
                    to={props.link}
                    exact={props.exact}
                    onClick = { props.selected }
                    activeClassName= "active">
                    {props.children}
                     <KeyboardArrowUp />
                     <Menu>First</Menu>
                </NavLink>
               
            </li>
            )
    }
    
    return (
    <li className= "NavigationItem" >
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName= "active"
            onClick = { props.selected }>
            {props.children}
           
        </NavLink>
    </li>
    )
};

export default navigationItem;