import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const header = () => (
    <div className = "SubHeaderNavigationItem">
        <NavLink to = "/level1/file">File</NavLink>
        <NavLink to = "/level1/sytem">System</NavLink>
        <NavLink to = "/level1/licensing">Licensing</NavLink>
        <NavLink to = "/level1/administration">Administration</NavLink>
    </div>
)


export default header;