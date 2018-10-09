import React from 'react';
import DashboardItems from '../../components/Dashboard/Dashboard-list-items/DashboardItems';

class Dashboard extends React.Component {

    clickHandler = (status) =>{
        this.props.history.push({
            pathname: '/solution',
            search: '?query='+ status
        })
    }

    render(){
        return (
            <div>
                <DashboardItems
                clicked = {(status) =>  this.clickHandler(status) } />
            </div>
        )
    }

}

export default Dashboard;