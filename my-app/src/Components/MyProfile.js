import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SelectDialog from './Date&TymeForm';
import DropDownDialog from './ReserveForm';



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
  }
});

function MyProfile(props){
const {classes} = props;
  return(
    <div className={classes.root}>
      <Grid container spasing={24} style={{background:'rgba(0,0,255,0.1)'}}>
        <Grid item sm={12} className={classes.item}>
        <SelectDialog />
        <h1>You have reservation at </h1>
        </Grid>
      </Grid>
    </div>
  )
}
MyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyProfile);


