import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReserveForm from './ReserveForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CancelReserves from './CancelReserves';

const styles = theme => ({
  root:{
    width: '100%',
  },
  item:{
    marginTop:'32px',
    justify: 'center',
    margin: 'auto',
    padding: '2px',
  },
  text:{
    marginLeft: '48px',
    marginBottom: '48px',
    marginRight: '48px',
    margin: 'auto',
    marginTop: '48px',
    color: "#F9FBE7"
  },
  paper:{
    margin:'24px',
    padding: '24px',
    textAlign: 'center'
  }
});

function MyProfile(props){
const {classes} = props;
  return(
    <div className={classes.root}>
      <Grid container spasing={24} style={{background:'rgba(0,0,255,0.1)'}}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Here you can make an appointment.
            </Typography>
            <Typography component="p">
              Just choose the appropriate day and time!
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={12} className={classes.item}>
          <ReserveForm />
        </Grid>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              You can also cancel your appointment
            </Typography>
              <CancelReserves />
          </Paper>
        </Grid>
        <Grid item sm={4}></Grid>
        
      </Grid>
    </div>
  )
}
MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);


