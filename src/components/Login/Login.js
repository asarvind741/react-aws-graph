import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    maxWidth: 400,
    height: 600,
    margin: 20,
    marginLeft: 500
  },
  media: {
    height: 140,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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
      <CardActions>
        <Button size="small" color="primary" type = "submit">
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