import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Images';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import RegistrationForm from './RegistrationForm';
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
    marginLeft: '48px',
    marginBottom: '48px',
    marginRight: '48px',
    margin: 'auto',
    color: "#F9FBE7"
  },
  block:{
    background: 'rgba(255,255,125,0.2)',
    margin: 'auto'
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

      <Grid item sm={12}>
      <div className={classes.block}>
      <Typography paragraph component='p' variant="h6" className={classes.text}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph component='p' variant="h6" className={classes.text}>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t <a href="contuct">open.</a>)
            </Typography>
            </div> 
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
          <Grid item xs={12} className={classes.item}>
            <Accordeon />
          </Grid>

        
      </Grid>
      

      
      
    </div>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);
