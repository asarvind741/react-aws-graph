import React, { Fragment } from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Group from '@material-ui/icons/Group';
import InsertChart from '@material-ui/icons/InsertChart';
import Layers from '@material-ui/icons/Layers';
import Assignment from '@material-ui/icons/Assignment';
import './SidenavigationItem.css';


const SidenavigationItem = (props) => {

    if(props.icon === "Dashboard"){
    return (
    <div className = "sidenav-item">
    <Dashboard />
    </div>
    )
    }
    else if(props.icon === "ShoppingCart"){
    return (
    <div className = "sidenav-item">
    <ShoppingCart />
    </div>
    )
    }
    else if(props.icon === "Group"){
    return (
    <div className = "sidenav-item">
    <Group />
    </div>
    )
    }
    else if(props.icon === "InsertChart"){
    return (
    <div className = "sidenav-item">
    <InsertChart />
    </div>
    )
    }
    else if(props.icon === "Layers"){
    return (
    <div className = "sidenav-item">
    <Layers />
    </div>
    )
    }
    else if(props.icon === "Assignment"){
    return (
    <div className = "sidenav-item">
    <Assignment />
    </div>
    )
    }
}

export default SidenavigationItem;