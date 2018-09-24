import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

class NavigationItems extends React.Component {
    state = {
        file: [
            {value: 'new', displayValue: 'New'},
            {value: 'open', displayValue: 'Open'},
            {value: 'save', displayValue: 'Save'},
            {value: 'save-as', displayValue: 'Save As'},
            {value: 'duplicate', displayValue: 'Duplicate'}
        ],
        setup: [
            {value: 'user-profiles', displayValue: 'User Profiles'},
            {value: 'group-profiles', displayValue: 'Group Profiles'},
            {value: 'vas-profiles', displayValue: 'VAS Profiles'},
            {value: 'handsets-and-devices', displayValue: 'Handsets & Devices'},
            {value: 'connectivity', displayValue: 'Connectivy'}
        ],
        reporting: [
            {value: 'licensing-manager', displayValue: 'Licensing Manager'},
            {value: 'activity-manager', displayValue: 'Activity Manager'},
            {value: 'analytic-manager', displayValue: 'Analytic Manager'}
        ],
        administration: [
            {value: 'user-profile', displayValue: 'User Profile'},
            {value: 'reset-password', displayValue: 'Reset Password'},
            {value: 'user-management', displayValue: 'User Management'},
            {value: 'guides', displayValue: 'Guides'},
            {value: 'api-documentation', displayValue: 'API Documentation'}
        ]
        

    }
    render(){
    return (
    <ul className= "NavigationItems">
       
        <NavigationItem 
        link="/file" 
        // selected = {this.props.clicked}
        subMenu = { this.state.file }>File</NavigationItem>
        <NavigationItem 
        link="/reporting" 
        // selected = {this.props.clicked}
        subMenu = { this.state.setup }>Setup</NavigationItem>
        <NavigationItem 
        link="/reporting" 
        // selected = {this.props.clicked}
        subMenu = { this.state.reporting }>Reporting</NavigationItem>
        <NavigationItem 
        link="/administration" 
        // selected = {this.props.clicked}
        subMenu = { this.state.administration }>Administration</NavigationItem>
        <NavigationItem 
        link="/close-menu" 
        // selected = {this.props.clicked}
        >Close Menu</NavigationItem>
    </ul>
    )
    }
};

export default NavigationItems;