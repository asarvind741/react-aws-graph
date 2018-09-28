import React, { Fragment } from 'react';
import './Solution.css';
import { parse } from  'query-string';
import SolutionTitleBar from '../../components/Solution/SolutionTitleBar/SolutionTitleBar';
import ScrollableTabsButtonPrevent from '../../components/Solution/Tabs/Tabs';
import solutionData from '../../data/solution-details';

class Solution extends React.Component {

    state = {
        selectedItem: {},
        found: false,
     
    }

    componentDidMount(){
        // Parse query string
        const parsed = parse(this.props.location.search);
        
        solutionData.forEach(item => {
                if(item['Business Name'] === parsed['Business Name']){
                    this.setState({
                        selectedItem: item
                    }, () => {
                        console.log("this selected item", this.state.selectedItem)
                    })
                }
            })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            selectedItem: {}
        })
        const parsed = parse(nextProps.location.search);
        solutionData.forEach(item => {
                if(item['Business Name'] === parsed['Business Name']){
                    this.setState({
                        selectedItem: item
                    }, () => {
                        console.log("this selected item", this.state.selectedItem)
                    })
                }
            })
    }

    render(){
        
        return(
            <div>
           {(this.state.selectedItem) ? 
           <Fragment>
               <SolutionTitleBar 
               solution = {this.state.selectedItem}/>
               <ScrollableTabsButtonPrevent />
               </Fragment> : '' }
            </div>
        )
    }
}

export default Solution;