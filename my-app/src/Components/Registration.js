import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  div:{
    float: 'right'
  }
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.div}>

      <Button variant="outlined" color="primary" className={classes.button}>
        Sign in
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Sign up
      </Button>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
