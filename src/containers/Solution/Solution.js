import React, { Fragment } from 'react';
import './Solution.css';
import { parse } from  'query-string';
import SolutionTitleBar from '../../components/Solution/SolutionTitleBar/SolutionTitleBar';
import ScrollableTabsButtonPrevent from '../../components/Solution/Tabs/Tabs';
import { GET_SOLUTION_BY_STATUS } from '../../graphql/Queries';
import { graphql, compose } from 'react-apollo';
class Solution extends React.Component {

    state = {
        selectedItem: {},
        searchItem: '',
        found: false,
     
    }

    componentDidMount(){
        // Parse query string
        const parsed = parse(this.props.location.search);

        this.setState({
            searchItem: parsed['businessName']
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            selectedItem: {}
        })
        const parsed = parse(nextProps.location.search);

        this.setState({
            searchItem: parsed['businessName']
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