import React from 'react';
import './SolutionTitleBar.css';

const solutionTitleBar = ({solution}) => (
    <div className = "solution-title-bar">
        <p><strong>Company Name: </strong>{solution['Business Name']}</p>
        <p><strong>Solution ID: </strong> {solution['SolutionID']}</p>
        <p><strong>Solution Description: </strong>{solution['SolDescription']}</p>
        <p><strong>Solution Status: </strong>{solution['Status']}</p>
        <p><strong>Mode: </strong></p>
    </div>
)

export default solutionTitleBar;