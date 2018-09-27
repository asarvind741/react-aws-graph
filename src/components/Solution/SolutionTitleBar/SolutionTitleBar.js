import React from 'react';
import './SolutionTitleBar.css';

const solutionTitleBar = ({solutionTitleDetails}) => (
    <div className = "solution-title-bar">
        <p><strong>Company Name: </strong></p>
        <p><strong>Solution ID: </strong></p>
        <p><strong>Solution Description: </strong></p>
        <p><strong>Solution Status: </strong></p>
        <p><strong>Mode: </strong></p>
    </div>
)

export default solutionTitleBar;