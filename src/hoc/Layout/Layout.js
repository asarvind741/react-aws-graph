import React, { Fragment} from 'react';
import Header from '../../components/Navigation/Header/Header';
import OpenMenuDrawer from '../../components/Navigation/OpenMenuDrawer/OpenMenuDrawer';
class Layout extends React.Component {

    state = {
        openMeun: false
    }

    openMeunHandler = () => {
        this.setState((prevState) => {
            return { openMenu: !prevState.openMenu}
        })
    }

    render(){

        return (
            <Fragment>
                <Header openMenuClicked = {this.openMeunHandler }/>
                {(this.state.openMenu)?
                 <OpenMenuDrawer
                    open={this.state.openMenu}
                    closed={this.openMeunHandler} />: null}
                { this.props.children }
            </Fragment>
        )
    }
}

export default Layout;