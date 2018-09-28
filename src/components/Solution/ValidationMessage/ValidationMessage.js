import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/Info';
import Error from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';
import './ValidationMessage.css';

const styles = theme => ({
  warningTooltip: {
    background: 'orange',
    color: 'white',
    fontSize: 12,
  },
  errorTooltip: {
    background: 'red',
    color: 'white',
    fontSize: 12,
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CustomizedBadge(props) {
  const { classes, noOfMessages } = props;
  const warningMessage = noOfMessages + " Warnings";
  const errorMessage = noOfMessages + " Errors";

  if(props.warning){
  return (
    <Tooltip title = {warningMessage } placement="top" classes={{ tooltip: classes.warningTooltip }}>
    <IconButton aria-label="Info">
      <Badge badgeContent={noOfMessages} color="secondary" classes={{ badge: classes.badge }}>
        <Info />
      
       
      </Badge>
    </IconButton>
      </Tooltip>
  );
  }
  else if(props.error){
    return (
      <Tooltip title = {errorMessage } placement="top" classes={{ tooltip: classes.errorTooltip }}>
      <IconButton aria-label="Error">
        <Badge badgeContent={noOfMessages} color="secondary" classes={{ badge: classes.badge }}>
          <Error color = "error"/>
        </Badge>
      </IconButton>
      </Tooltip>
    );
  }
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);