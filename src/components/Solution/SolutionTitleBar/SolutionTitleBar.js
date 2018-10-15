import React from 'react';
import './SolutionTitleBar.css';
import Spinner from '../../Navigation/UI/Spinner/Spinner';

const solutionTitleBar = (props) => {
    const {searchData } = props;
   if(!searchData){
       return (
        <div className = "solution-title-bar">
        <p><strong>Company Name: </strong></p>
        <p><strong>Solution ID: </strong></p>
        <p><strong>Solution Description: </strong></p>
        <p><strong>Solution Status: </strong></p>
        <p><strong>Mode: </strong></p>
    </div>
       )
   }
   else {
    return (
    <div className = "solution-title-bar">
        <p><strong>Company Name: </strong>{searchData.businessName}</p>
        <p><strong>Solution ID: </strong>{searchData.solutionId}</p>
        <p><strong>Solution Description: </strong>{searchData.solutionDescription}</p>
        <p><strong>Solution Status: </strong>{searchData.status}</p>
        <p><strong>Mode: </strong>{searchData.mode}</p>
    </div>
    )
   }
}

export default solutionTitleBar;