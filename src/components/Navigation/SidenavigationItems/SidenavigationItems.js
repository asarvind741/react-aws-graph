import React, { Fragment } from 'react';
import SidenavigationItem from './SidenavigationItem/SidenavigationItem'

class SidenavigationItems extends React.Component {

    state

    render(){
        return (
            <Fragment>
            <SidenavigationItem icon = "Dashboard"></SidenavigationItem>
            <SidenavigationItem icon = "ShoppingCart"></SidenavigationItem>
            <SidenavigationItem icon = "Group"></SidenavigationItem>
            <SidenavigationItem icon = "InsertChart"></SidenavigationItem>
            <SidenavigationItem icon = "Layers"></SidenavigationItem>
            <SidenavigationItem icon = "Assignment"></SidenavigationItem>
            <SidenavigationItem icon = "Assignment"></SidenavigationItem>
            <SidenavigationItem icon = "Assignment"></SidenavigationItem>
            </Fragment>
        )
    }
}

export default SidenavigationItems;