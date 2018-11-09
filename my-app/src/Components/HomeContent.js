import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Images';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import FormDialogReg from './DialogForm';
import FormDialogAuto from './FormDialogAuto';
import CardContent from '@material-ui/core/CardContent';
import MyCard from './Card';
//import RecipeReviewCard from './MyProfile';
import Accordeon from './Accordeon';

const styles = {
  root: {
    width: '100%',
    overflowX: 'hidden',
    //maxWidth: 800,
    //padding: '24px',
    //margin: 'auto',
    marginBottom: 0
  },
  font:{
    color: 'white',
  },
  fontSimple:{
    fontSize: '16px',
    //textAlign: 'center',
    color: '#FFFDE7'
  },
  paper:{
    margin:'36px',
    padding: '24px',
    marginBottom: '32px',
    marginTop: '32px',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  paperText:{
    fontSize: '16px',
    color: 'white'
  },
  item:{
    marginTop:'32px',
    justify: 'center',
    marginBottom: '16px',
    padding: '8px'
  },
  itemMaxWidth:{
    minWidth: '100%'
  },
  text:{
    marginLeft: '36px',
    marginBottom: '36px',
    margin: 'auto',
    color: "#F9FBE7"
  }

};

function Types(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid  container spasing={24} style={{background:'rgba(0,0,255,0.1)'}} >
      <Grid item sm={12} className={classes.item}>
        <Typography variant='h1' component="h3" className={classes.text}>barbershop</Typography>
      </Grid>

          <Grid item xs={12} className={classes.item}>
            <Accordeon />
          </Grid>
          
          <Grid item xs={6} className={classes.item}>
              <MediaCard src={"/images/barber.jpg"} 
              title={"hfhf"} 
              description={"hd"} 
              header={"nnd"}/>
          </Grid>
          <Grid item xs={6} className={classes.item}>
              <MediaCard src={"/images/barber-img1.jpg"} 
              title={"hfhf"} 
              description={"hd"} 
              header={"nnd"}/>
          </Grid>

        
      </Grid>
      <Grid item sm={12} className={classes.item}>
        <MediaCard src={"/images/barber-img-2.jpg"} title={"hfhf"} description={"hd"} header={"nnd"}/>
      </Grid>
      
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);
