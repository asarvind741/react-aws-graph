import React, { Fragment} from 'react';
import userList from '../../data/user.json';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import Header from '../../components/Navigation/Header/Header';
import OpenMenuDrawer from '../../components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
class Layout extends React.Component {

    state = {
        openMeun: false,
        textSearch: '',
        user: {}
    }

    componentDidMount(){
        this.setState({
            user:userList[0]
        })
    }

    openMeunHandler = () => {
        this.setState((prevState) => {
            return { openMenu: !prevState.openMenu}
        })
    }
    
    valueChangedHandler = value => {
        this.setState({
            textSearch: value
        })
    }

    render(){

        return (
            <Fragment>
                <ReactiveBase
                 app="good-books-ds"
                 credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d">
                 <Header 
                 openMenuClicked = {this.openMeunHandler } 
                 valueChanged = {(value) => this.valueChangedHandler(value) }
                 currentUser = { this.state.user }/>
                </ReactiveBase>
                {(this.state.openMenu)?
                 <OpenMenuDrawer
                    open={this.state.openMenu}
                    closed={this.openMeunHandler} />: null}
                <div className = "container">
                <div>
                {React.cloneElement(this.props.children, {...this.props})}  
                </div>
                
                </div>
            </Fragment>
        )
    }
}

export default Layout;