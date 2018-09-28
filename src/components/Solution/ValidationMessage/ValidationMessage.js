import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
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
  badge1: {
    top: 1,
    right: -15,
    backgroundColor: 'orange',
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },

  badge2: {
    top: 1,
    right: -15,
    backgroundColor: 'red',
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CustomizedBadge(props) {
  const { classes, warningCount, errorCount } = props;
  const totalCount = warningCount + errorCount;
  const title = totalCount + ' Messages.'

  return (
    <Tooltip title = { title } 
    placement="top" 
    classes={(errorCount>0) ? { tooltip: classes.warningTooltip }: {  tooltip: classes.errorTooltip }}>
    <IconButton aria-label="Info" >
      <Badge badgeContent={ totalCount } color="secondary" 
      classes={(errorCount) ? { badge: classes.badge2 }: { badge: classes.badge1 }}>
        <Error className = 'info-class'/>       
      </Badge>
    </IconButton>
    </Tooltip>
  );
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);