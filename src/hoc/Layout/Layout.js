import React, { Fragment} from 'react';
import userList from '../../data/user.json';
import Header from '../../components/Navigation/Header/Header';
import OpenMenuDrawer from '../../components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
import './Layout.css';
import $ from 'jquery';

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

       // var width = $(window).width();
       // $('.static-class').css('width', width);
    }

    openMeunHandler = (event) => {
        console.log("asfdfffffffffffff", event.target);
        this.setState((prevState) => {
            return { openMenu: !prevState.openMenu}
        }, () => {
            if(this.state.openMenu){
                console.log("sddd", this.state.openMenu)
                $('.container.static-class').css('width', '72%');
            }
           
            else {
                $('.container.static-class').css('width', '100%');
            }
        });
        
    }
    
    valueChangedHandler = value => {
        this.setState({
            textSearch: value
        })
    }

    render(){
        console.log("children", this.props.children)
        let attachedClasses = `container static-class`;

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
                <div className = { attachedClasses }>
                { this.props.children }                
                </div>
            </Fragment>
        )
    }
}

export default Layout;