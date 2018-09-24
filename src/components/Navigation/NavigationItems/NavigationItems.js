import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className= "NavigationItems">
       
        <NavigationItem link="/file" selected = {props.clicked}>File</NavigationItem>
        <NavigationItem link="/sytem" selected = {props.clicked}>System</NavigationItem>
        <NavigationItem link="/licensing" selected = {props.clicked}>Licensing</NavigationItem>
        <NavigationItem link="/administration" selected = {props.clicked}>Administration</NavigationItem>
        <NavigationItem link="/close" selected = {props.clicked}>CLOSE MENU</NavigationItem>
    </ul>
);

export default navigationItems;