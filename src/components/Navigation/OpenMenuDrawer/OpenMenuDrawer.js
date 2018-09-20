import React, { Fragment } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import  './OpenMenuDrawer.css';
import Backdrop from '../UI/Backdrop/Backdrop';

const OpenMenuDrawer = ( props ) => {
    let attachedClasses = `SideDrawer Close`;
    if (props.open) {
        attachedClasses =`SideDrawer Open`;
    }
    return (
        <Fragment>
            {/* <Backdrop show={props.open} clicked={props.closed}/> */}
            <div className= {attachedClasses}>
                <nav>
                    <NavigationItems clicked = {props.closed} />
               </nav>
            </div>
        </Fragment>
    );
};

export default OpenMenuDrawer;