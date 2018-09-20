import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'

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