import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './DashboardItem.css';

const  dashboardItem = (props) =>{
    const { item } = props;

    let classes1 = "card";
    if(item.status === "Active"){
        classes1 = classes1 + ' ' + 'card-acitve';
    }
    else  if(item.status === "Pending"){
        classes1 = classes1 + ' ' + 'card-pending';
    }
    else  if(item.status === "Rejected"){
        classes1 = classes1 + ' ' +  'card-rejected';
    }
    else if (item.status === "Approved"){
        classes1 = classes1 + ' ' + 'card-approved';
    }
 
  return (
    <Card className= { classes1 } >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Status image"
          className= "media"
          height="140"
          image= { item.image }
          title="Solution Status"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            { item.status }
          </Typography>
          <Typography component="p">
           Total { item.totalSolutions }  are undeer { item.status } status
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {() => props.handleClick(item.status)}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}


export default dashboardItem;