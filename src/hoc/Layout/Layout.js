import React, { Fragment} from 'react';
import userList from '../../data/user.json';
import Header from '../../components/Navigation/Header/Header';
import OpenMenuDrawer from '../../components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
import './Layout.css';

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
                 <Header 
                 openMenuClicked = {this.openMeunHandler } 
                 valueChanged = {(value) => this.valueChangedHandler(value) }
                 currentUser = { this.state.user }/>
                {(this.state.openMenu)?
                 <OpenMenuDrawer
                    open={this.state.openMenu}
                    closed={this.openMeunHandler} 
                    />: null}
                <div className = "container">
                { this.props.children }                
                </div>
            </Fragment>
        )
    }
}

export default Layout;