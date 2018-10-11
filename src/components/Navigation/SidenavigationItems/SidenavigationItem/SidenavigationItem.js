import React, { Fragment } from 'react';
import { li } from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Group from '@material-ui/icons/Group';
import InsertChart from '@material-ui/icons/InsertChart';
import Layers from '@material-ui/icons/Layers';
import Assignment from '@material-ui/icons/Assignment';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import './SidenavigationItem.css';




const SidenavigationItem = (props) => {

    if(props.icon === "Dashboard"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <Dashboard />
    </div>
    {props.children}
    </li>
    )
    }
    else if(props.icon === "ShoppingCart"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <ShoppingCart />
    </div>
    {props.children}
    </li>
    )
    }
    else if(props.icon === "Group"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <Group />
    </div>
     {props.children}
    </li>
    )
    }
    else if(props.icon === "InsertChart"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <InsertChart />
    </div>
     {props.children}
    </li>
    )
    }
    else if(props.icon === "Layers"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <Layers />
    </div>
    {props.children}
    </li>
    )
    }
    else if(props.icon === "Assignment"){
    return (
    <li  className = "sidenav-item">
    <div className = "align-image">
    <Assignment />
    </div>
    {props.children}
    </li>
    )
    }
    else if(props.icon === "close"){
        return (
            <li className = "sidenav-item-close" onClick = {props.selected}>
            <div className = "align-image rit_icn">
            <KeyboardArrowLeft />
            </div>
            </li>
        )
    }
}

export default SidenavigationItem;