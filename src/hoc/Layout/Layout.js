import React, { Fragment} from 'react';

class Layout extends React.Component {

    render(){

        return (
            <Fragment>
                { this.props.children }
            </Fragment>
        )
    }
}

export default Layout;