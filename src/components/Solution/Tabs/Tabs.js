import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import './Tabs.css';
import CustomizedBadge from '../ValidationMessage/ValidationMessage';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonPrevent extends React.Component {
  state = {
    value: 0,
    validationWarning: true,
    validationError: true
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  

  render() {
    const { classes } = this.props;
    const { value } = this.state;


    return (
      <div className="tabSection">
      <div className={classes.root}>
        <AppBar position="static">
        <div >
           <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
            <Tab label="Customer Details"
            className = "tab-container"  icon={
            <div className = "inside-tab-div-class">
              <div className = "phone-icon">
              <PhoneIcon />
              </div>
              {(this.state.validationWarning) ? 
                 <CustomizedBadge 
                 className = "show-message"
                 warningCount = { 10 }
                 errorCount = { 10 }
                 onMouseOver = { this.showValidationInfo}
                 /> : ''}
             </div>
            } />
           <Tab className = "tab-container" label="Location Details" icon={
            <div className = "inside-tab-div-class">
            <div className = "phone-icon">
              <FavoriteIcon />
              </div>
              {(this.state.validationWarning) ? 
                 <CustomizedBadge 
                 warningCount = { 5 }
                 errorCount = { 0 }
                 onMouseOver = { this.showValidationInfo}
                 /> : ''}
             </div>
            } />
            <Tab className = "tab-container"  label="User Details" 
            icon={
              <div className = "inside-tab-div-class">
              <div className = "phone-icon">
                <PersonPinIcon />
                </div>
                {(this.state.validationWarning) ? 
                   <CustomizedBadge 
                   warningCount = { 5 }
                   errorCount = { 0 }
                   onMouseOver = { this.showValidationInfo}
                   /> : ''}
               </div>
              }
             />
            <Tab 
            className = "tab-container"  
            label="Call Flows" 
            icon={
              <div className = "inside-tab-div-class">
              <div className = "phone-icon">
                <HelpIcon />
                </div>
                {(this.state.validationWarning) ? 
                   <CustomizedBadge 
                   warningCount = { 5 }
                   errorCount = { 0 }
                   onMouseOver = { this.showValidationInfo}
                   /> : ''}
               </div>
              } />
            <Tab 
            className = "tab-container"  
            label="Device Management"
            icon={
              <div className = "inside-tab-div-class">
              <div className = "phone-icon">
                <ShoppingBasket />
                </div>
                {(this.state.validationWarning) ? 
                   <CustomizedBadge 
                   warningCount = { 5 }
                   errorCount = { 0 }
                   onMouseOver = { this.showValidationInfo}
                   /> : ''}
               </div>
              } />
            <Tab 
            className = "tab-container"  
            label="Active Solutions" 
            icon={
              <div className = "inside-tab-div-class">
              <div className = "phone-icon">
                <FavoriteIcon />
                </div>
                {(this.state.validationWarning) ? 
                   <CustomizedBadge 
                   warningCount = { 5 }
                   errorCount = { 0 }
                   onMouseOver = { this.showValidationInfo}
                   /> : ''}
               </div>
              } />
          </Tabs>
          </div>
        </AppBar>
        {value === 0 && <TabContainer>Customer Details will go here</TabContainer>}
        {value === 1 && <TabContainer>Location Details will go here</TabContainer>}
        {value === 2 && <TabContainer>User Details will go here</TabContainer>}
        {value === 3 && <TabContainer>Call Flows will go here</TabContainer>}
        {value === 4 && <TabContainer>Device Management will go here</TabContainer>}
        {value === 5 && <TabContainer>Active Solutions will here here</TabContainer>}
      </div>
      </div>
  
    );
  }
}

ScrollableTabsButtonPrevent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonPrevent);
