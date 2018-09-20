import React from 'react';
import {
	ReactiveBase
} from '@appbaseio/reactivesearch';
import Home from '../../components/Home/Home';


class Homemain extends React.Component {

    render(){

        return (
        <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d">
        <Home />
        </ReactiveBase>
        );
    }

}

export default Homemain;