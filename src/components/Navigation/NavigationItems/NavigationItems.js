import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

const navigationItems = () => (
    <ul className= "NavigationItems">
       
        <NavigationItem link="/leval1">LEVAL 1</NavigationItem>
        <NavigationItem link="/leval2">LEVAL 2</NavigationItem>
        <NavigationItem link="/leval3">LEVAL 3</NavigationItem>
        <NavigationItem link="/leval4">LEVAL 4</NavigationItem>
        <NavigationItem link="/leval5">LEVAL 5</NavigationItem>
        <NavigationItem link="/close-menu">CLOSE MENU</NavigationItem>
    </ul>
);

export default navigationItems;