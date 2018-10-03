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
import './Login.css';

const styles = theme => ({
  card: {
    margin: 15,
    maxWidth: '100%',
    marginLeft: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
});

const LoginComponent = (props) => {
  const { classes } = props;
  return (
    <form onSubmit = {props.submit}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Login
          </Typography>
          <TextField
          id="email"
          label="E-mail"
          className={classes.textField}
          value={props.email}
          onChange={props.changed}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          className={classes.textField}
          value={props.password}
          onChange={props.changed}
          margin="normal"
        />
        </CardContent>
      </CardActionArea>
      <CardActions className = "card-action-main">
        <Button size="small" color="primary" type = "submit" className = "primary-button">
          Submit
        </Button>
      </CardActions>
    </Card>
    </form>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);