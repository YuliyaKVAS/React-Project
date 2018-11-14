import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SelectDialog from './Date&TymeForm';
import ReserveForm from './ReserveForm';
import Typography from '@material-ui/core/Typography';



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
  }
});

function MyProfile(props){
const {classes} = props;
  return(
    <div className={classes.root}>
      <Grid container spasing={24} style={{background:'rgba(0,0,255,0.1)'}}>
        <Grid item sm={12} className={classes.item}>
          <Typography paragraph component='p' variant="h6" className={classes.text}>
            Dear customer, you are on your profile page! Here you can make an appointment for a convenient day.
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.item}>
        <SelectDialog />
        <ReserveForm />
        </Grid>
      </Grid>
    </div>
  )
}
MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);


