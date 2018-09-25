import React, { Fragment } from 'react';
import SearchWeb from './SearchWeb';

class SearchWebs extends React.Component {

render(){
    const { webData, lexcenData } = this.props;
    const renderWebData = webData.map((item, index) => (
        <SearchWeb 
        key = { index}
        item = {item} />
     ))

     const renderLexcenData = lexcenData.map((item, index) => (
        <SearchWeb 
        key = { index}
        item = {item} />
    ))

     let showResult =  (
        <Fragment>
         <h4 className = "heading-searhweb borderClass">Web</h4>
         <div className = "listing"></div>
        { renderWebData}
        <h4 className = "heading-searhweb borderClass">Database</h4>
        <div className = "listing"></div>
        {renderLexcenData }
     </Fragment>
    )

    if(webData.length === 0 && lexcenData.length === 0){
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