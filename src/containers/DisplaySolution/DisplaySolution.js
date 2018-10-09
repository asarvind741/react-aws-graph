import React from 'react';
import { parse } from  'query-string';
import { graphql, compose } from 'react-apollo';
import { GET_SOLUTION_BY_STATUS } from '../../graphql/Queries';
import DisplaySolutionTable from '../../components/DisplaySolutionTable/DisplaySolutionTable'


class DisplaySolution extends React.Component {

    componentDidMount(){
        const parsed = parse(this.props.location.search);
        console.log("parsed", parsed.query);
    }

    render(){
        return(
            <div>Shown</div>
        )
    }
}

const GetSolutions = compose(
    graphql(GET_SOLUTION_BY_STATUS, {
      options: {
        fetchPolicy: 'cache-and-network'
      },
      props: (props) => ({
       solutionData: props.data.listSolutions && props.data.listSolutions.items,
    //    subscribeToNewSolution:params => {
    //      props.data.subscribeToMore({
    //        document:NEW_SOLUTION_SUBSCRIPTION,
    //        updateQuery: ( prev, { subscriptionData: {data: { onCreateSolution }}}) => ({
    //          ...prev,
    //          solutionData: {
    //           __typename: 'solutionConnection',
    //           items:[onCreateSolution, ...prev.listSolutions.items.filter(solution =>
    //             solution.uid  !== onCreateSolution.uid)]
    //          }
    //        })
    //      })
    //    }
      })
  })
  )(DisplaySolutionTable)

export default DisplaySolution;