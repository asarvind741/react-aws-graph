import React from 'react';
import './SolutionTitleBar.css';
import Spinner from '../../Navigation/UI/Spinner/Spinner';

const solutionTitleBar = (props) => {
    const {searchData, webItem } = props;
    if(searchData) {
        return (
        <div className = "solution-title-bar">
            <p><strong>Company Name: </strong><br />{searchData.businessName}</p>
            <p><strong>Solution ID: </strong><br />{searchData.solutionId}</p>
            <p><strong>Solution Description: </strong><br />{searchData.solutionDescription}</p>
            <p><strong>Solution Status: </strong><br />{searchData.status}</p>
            <p><strong>Mode: </strong><br />{searchData.mode}</p>
        </div>
        )
       }
    
   else if(!!webItem){
       return (
        <div className = "solution-title-bar">
        <p><strong>Company Name: </strong><br />{webItem.businessName}</p>
        <p><strong>Solution ID: </strong><br /></p>
        <p><strong>Solution Description:</strong><br /></p>
        <p><strong>Solution Status: </strong><br /></p>
        <p><strong>Mode: </strong><br /></p>
    </div>
       )
   }
   else {
       return <Spinner />
   }
}

export default solutionTitleBar;