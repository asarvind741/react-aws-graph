import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className= "NavigationItems">
       
        <NavigationItem link="/level1" selected = {props.clicked}>LEVAL 1</NavigationItem>
        <NavigationItem link="/leval2" selected = {props.clicked}>LEVAL 2</NavigationItem>
        <NavigationItem link="/leval3" selected = {props.clicked}>LEVAL 3</NavigationItem>
        <NavigationItem link="/leval4" selected = {props.clicked}>LEVAL 4</NavigationItem>
        <NavigationItem link="/leval5" selected = {props.clicked}>LEVAL 5</NavigationItem>
        <NavigationItem link="/close-menu" selected = {props.clicked}>CLOSE MENU</NavigationItem>
    </ul>
);

export default navigationItems;