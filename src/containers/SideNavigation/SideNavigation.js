import React from 'react';
import SidenavigationItems from '../../components/Navigation/SidenavigationItems/SidenavigationItems';
import './SideNavigation.css';

class SideNavigation extends React.Component {

    render(){
        return(
            <div className = "sidenav-main">
                <SidenavigationItems />
            </div>
        )
    }
}

export default SideNavigation;