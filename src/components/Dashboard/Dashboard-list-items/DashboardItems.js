import React from 'react';
import './DashboardItems.css';
import  DashboardItem from '../Dashboard-item/DashboardItem';
import  approvedImage from '../../../asstes/approved.png';

class DashboardItems extends React.Component {

    state = {
        items: [
        {
                totalSolutions: 40,
                status: 'Approved',
                image: approvedImage
        },
        {
            totalSolutions: 40,
            status: 'Active',
            image: approvedImage
        },
        {
            totalSolutions: 70,
            status: 'Rejected',
            image: approvedImage
        },
        {
            totalSolutions: 46,
            status: 'Pending',
            image: approvedImage
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