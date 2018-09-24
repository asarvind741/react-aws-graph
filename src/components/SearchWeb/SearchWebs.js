import React, { Fragment } from 'react';
import SearchWeb from './SearchWeb';

class SearchWebs extends React.Component {
    

componentWillReceiveProps(nextProps){
    this.props = nextProps;
}

render(){
    const { data } = this.props;
    console.log("data", this.props)
    const renderItem = data.map(item => (
        <SearchWeb item = {item} />
     ))

   return  (
       <Fragment>
        <h4 className = "heading-searhweb">Web</h4>
       { renderItem}
       <h4 className = "heading-searhweb">Database</h4>
    </Fragment>
   )
}
}

export default SearchWebs;