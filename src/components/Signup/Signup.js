import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    margin: 15,
    maxWidth: '100%',
    marginLeft: 0
  },
  media: {
    height: 140,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin:5,
    width: 200,
  },
});

const SignupComponent = (props) => {
  const { classes } = props;
  return (
    <form onSubmit = {props.submit}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Signup
          </Typography>
          <TextField
          id="firstName"
          label="First Name"
          className={classes.textField}
          value={props.firstName}
          onChange={props.changed}
          margin="normal"
        />
         <TextField
          id="lastName"
          label="Last Name"
          className={classes.textField}
          value={props.lastName}
          onChange={props.changed}
          margin="normal"
        />
         <TextField
          id="userName"
          label="Username"
          className={classes.textField}
          value={props.username}
          onChange={props.changed}
          margin="normal"
        />
         <TextField
          id="email"
          label="E-mail"
          type = "email"
          className={classes.textField}
          value={props.email}
          onChange={props.changed}
          margin="normal"
        />
         <TextField
          id="role"
          label="Role"
          className={classes.textField}
          value={props.role}
          onChange={props.changed}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type = "password"
          className={classes.textField}
          value={props.password}
          onChange={props.changed}
          margin="normal"
        />
        <TextField
          id="confirmPassword"
          label="confirmPassword"
          type = "password"
          className={classes.textField}
          value={props.confirmPassword}
          onChange={props.changed}
          margin="normal"
        />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" type = "submit">
          Submit
        </Button>
        <Button size="small" color="danger" type = "button">
          Cancel
        </Button>
      </CardActions>
    </Card>
    </form>
  );
}

SignupComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupComponent);
