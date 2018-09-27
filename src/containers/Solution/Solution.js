import React, { Fragment } from 'react';
import './Solution.css';
import { parse } from  'query-string';
import { withRouter } from 'react-router-dom';
import SolutionTitleBar from '../../components/Solution/SolutionTitleBar/SolutionTitleBar';
import ScrollableTabsButtonPrevent from '../../components/Solution/Tabs/Tabs';
import webAndLexcenData from '../../data/search-web';

class Solution extends React.Component {

    state = {
        selectedItem: {}
    }

    componentDidMount(){
        const parsed = parse(this.props.location.search);
        webAndLexcenData.forEach(item => {
            console.log("item", item)
            item.data.forEach(data1 => {
                console.log("data1",data1['Business Name'])
                if(data1['Business Name'] === parsed['Business Name']){
                    this.setState({
                        selectedItem: data1
                    }, () => {
                        console.log("data is", this.state.selectedItem)
                    })
                }
            })
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