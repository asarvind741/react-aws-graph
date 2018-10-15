import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../../../asstes/Lexxcen_logo-0.png';
import './ResetPasswordConfirmationCode.css';

const styles = theme => ({
  layout: {
    width: 'auto',
    
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    backgroundColor: '#efeeee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ResetPasswordConfirmationCode = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
    <CssBaseline />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <img src = { logo } alt = "Sign in" width = "150px"/>
        <Typography variant="headline">Reset Password</Typography>
         <form onSubmit = {props.submit} className={classes.form}>
             <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="confirmationCode">Confirmation Code</InputLabel>
              <Input 
              id="confirmationCode" 
              type = "password"
              name="confirmationCode" 
              autoComplete="confirmationCode"
              autoFocus
              value = {props.confirmationCode}
              onChange = { props.changed} />
            </FormControl>
            <p className = "resend-code" onClick = { props.resendCode}>Resend Code</p>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="newPassword">New Password</InputLabel>
              <Input 
              id="newPassword" 
              name="newPassword" 
              type = "password"
              autoComplete="newPassword"
              autoFocus
              value = {props.newPassword}
              onChange = { props.changed} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
            Submit
            </Button>
         </form>
       </Paper>
      </main>
    </React.Fragment>
  );
}

ResetPasswordConfirmationCode.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResetPasswordConfirmationCode);