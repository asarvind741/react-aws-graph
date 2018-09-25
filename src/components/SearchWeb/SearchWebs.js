import React, { Fragment } from 'react';
import SearchWeb from './SearchWeb';

class SearchWebs extends React.Component {

render(){
    console.log("assss", this.props.staticData)
    const { staticData } = this.props;
    const renderItem = staticData.map((item, index) => (
        <SearchWeb 
        key = { index}
        item = {item} />
     ))
     let showResult =  (
        <Fragment>
         <h4 className = "heading-searhweb">Web</h4>
        { renderItem}
        <h4 className = "heading-searhweb">Database</h4>
     </Fragment>
    )

    if(staticData.length == 0){
        showResult = (
            <Fragment>
            No Result Found..
        </Fragment>
        )
    }

   return  (
       <Fragment>
       { showResult }
      </Fragment>
   )
}
}

export default SearchWebs;