import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Images';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const styles = {
  root: {
    width: '100%',
    maxWidth: 800,
    padding: '24px',
    margin: 'auto',
  },
  paper:{
    margin:'24px',
    padding: '24px'
  }
};

function AboutUsContent(props){
  const {classes} = props;

  return(
  <div className={classes.root}>
  <Grid container spasing={24} style={{background:'rgba(0,0,155,0.1)'}} >
      <Grid item sm={4}>
        <Paper className={classes.paper}><Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography></Paper>
      </Grid>
      <Grid item sm={4}>
          <Paper className={classes.paper}><Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography></Paper>
      </Grid>
      <Grid item sm={4}>
          <Paper className={classes.paper}><Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography></Paper>
      </Grid>
      <Grid item sm={6}>
        <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
        title={"Title"}
        description={"best people"}
        header={"Title"}
      />
      </Grid>
      <Grid item sm={6}>
        <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
        title={"Title"}
        description={"best people"}
        header={"Title"}
      />
      </Grid>
    </Grid>
    </div>


  )
}

AboutUsContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsContent);
