import React from 'react';
import './Menu.css';

const menu = (props) => {

    const menuItem = props.items.map((item, index) => {
        return (
            <li value = {item.value} key = { index }>
            { item.displayValue }
            </li>
        )
    })

    return ( 
    <ul className = "sub-menu">
    { menuItem }
    </ul>)

}

export default menu;