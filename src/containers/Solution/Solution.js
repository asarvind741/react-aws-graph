import React from 'react';
import './Solution.css';
import { parse } from  'query-string';
import { withRouter } from 'react-router-dom';
import SolutionTitleBar from '../../components/Solution/SolutionTitleBar/SolutionTitleBar';

class Solution extends React.Component {

    render(){
        console.log('sdssssssssssfffffffff', this.props.location.search)
        const parsed = parse(this.props.location.search);
        console.log("asssssssssss", parsed)
        return(
            <div>
            <SolutionTitleBar />
            </div>
        )
    }
}

export default Solution;