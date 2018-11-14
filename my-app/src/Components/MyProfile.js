import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReserveForm from './ReserveForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root:{
    width: '100%',
    //marginBottom: '32px',
  },
  item:{
    //display: 'flex',
    //marginLeft: '48px',
    //margin: 'auto'
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
    color: "#F9FBE7"
  },
  paper:{
    margin:'24px',
    padding: '24px'
  }
});

function MyProfile(props){
const {classes} = props;
  return(
    <div className={classes.root}>
      <Grid container spasing={24} style={{background:'rgba(0,0,255,0.1)'}}>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              The main concept of our salon is quality
            </Typography>
            <Typography component="p">
              All our masters are professionals
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              The main concept of our salon is quality
            </Typography>
            <Typography component="p">
              All our masters are professionals
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={12} className={classes.item}>
          <ReserveForm />
        </Grid>
        <Grid item sm={12}>
          <Typography component="p" variant="h6">
            If you still have any questions, please write us in our profiles in social networks or call us <br/>
            +44-7871234567
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);


