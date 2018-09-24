import React from 'react';

const  serchWeb = (props) => {
    console.log("item ------------", props.item)
    return (
        <li>{ props.item.title }</li>
    )
}

export default serchWeb;

