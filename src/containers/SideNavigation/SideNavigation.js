import React from 'react';
import SidenavigationItems from '../../components/Navigation/SidenavigationItems/SidenavigationItems';
import './SideNavigation.css';

class SideNavigation extends React.Component {

    render(){
        return(
            <div className = "sidenav-main">
                <SidenavigationItems
                clicked = {this.props.closed}
                isOpen = { this.props.open } />
            </div>
        )
    }
}

export default SideNavigation;