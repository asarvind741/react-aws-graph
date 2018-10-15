import React, { Fragment } from 'react';
import './Solution.css';
import { parse } from  'query-string';
import SolutionTitleBar from '../../components/Solution/SolutionTitleBar/SolutionTitleBar';
import ScrollableTabsButtonPrevent from '../../components/Solution/Tabs/Tabs';
import { GET_SOLUTION_BY_STATUS } from '../../graphql/Queries';
import { graphql, compose } from 'react-apollo';
import onlyWebData from '../../data/search-web';

class Solution extends React.Component {

    state = {
        selectedItem: {},
        searchItem: '',
        found: false,
        webItem: null
     
    }

    componentDidMount(){
        // Parse query string
        const parsed = parse(this.props.location.search);
        const itemFound= onlyWebData[0].data.filter(item => item.businessName ===  parsed['businessName'])
        this.setState({
            searchItem: parsed['businessName'],
            webItem : itemFound[0]
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            selectedItem: {}
        })
        const parsed = parse(nextProps.location.search);
        const itemFound= onlyWebData[0].data.filter(item => item.businessName ===  parsed['businessName'])
        this.setState({
            searchItem: parsed['businessName'],
            webItem: itemFound[0]
        });

        
    }

    render(){

        const SoultionTitleBarWithData = compose(
            graphql(GET_SOLUTION_BY_STATUS, {
                options: {
                  fetchPolicy: 'cache-and-network',
                  variables: { businessName: this.state.searchItem}
                },
                props: (props) => ({
                    webItem: this.state.webItem,
                 searchData: props.data && props.data.getSolutionByStatus })
                })
        )(SolutionTitleBar)
        
        return(
            <div>
           {(this.state.selectedItem) ? 
           <Fragment>
               <SoultionTitleBarWithData/>
               <ScrollableTabsButtonPrevent />
               </Fragment> : '' }
            </div>
        )
    }
}

export default Solution;