import React, { Fragment } from 'react';
import SidenavigationItem from './SidenavigationItem/SidenavigationItem';
import './SidenavigationItems.css'

class SidenavigationItems extends React.Component {

    state

    render(){
        return (
            <Fragment>
            
            {(this.props.isOpen) ?
            <SidenavigationItem  icon = "close" selected = {this.props.clicked}>close</SidenavigationItem>
            : null }
            <SidenavigationItem icon = "Dashboard">New Solution</SidenavigationItem>
            <SidenavigationItem icon = "ShoppingCart">Existing Solution</SidenavigationItem>
            <SidenavigationItem icon = "Group">Team Members</SidenavigationItem>
            <SidenavigationItem icon = "InsertChart">Reports</SidenavigationItem>
            <SidenavigationItem icon = "Layers">Preferences</SidenavigationItem>
            <p className = {(this.props.isOpen) ? 'saved-reports': 'sidemenu-collapsed'}>Saved Reports</p>
            <SidenavigationItem icon = "Assignment">Current Month</SidenavigationItem>
            <SidenavigationItem icon = "Assignment">Last Quarter</SidenavigationItem>
            </Fragment>
        )
    }
}

export default SidenavigationItems;