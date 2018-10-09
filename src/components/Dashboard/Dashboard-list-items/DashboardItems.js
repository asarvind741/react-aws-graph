import React from 'react';
import './DashboardItems.css';
import  DashboardItem from '../Dashboard-item/DashboardItem';

class DashboardItems extends React.Component {

    state = {
        items: [
        {
                totalSolutions: 40,
                status: 'Approved',
                image: '../../../asstes/approved.png'
        },
        {
            totalSolutions: 40,
            status: 'Active',
            image: '../../../asstes/approved.png'
        },
        {
            totalSolutions: 70,
            status: 'Rejected',
            image: '../../../asstes/approved.png'
        },
        {
            totalSolutions: 46,
            status: 'Pending',
            image: '../../../asstes/approved.png'
        }
    ]
    }

    render(){
        const renderItems = this.state.items.map((item, index) => {
            return <DashboardItem 
                    key = { index }
                    item = { item }
                    handleClick = {(status) => this.props.clicked(status)} />
        })
        return(
            <div>{renderItems }</div>
        )
    }
}

export default DashboardItems;