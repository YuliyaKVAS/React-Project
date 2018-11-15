import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
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

function HomeContent(props) {
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
              <strong>We WELCOME... *All Age*All Race*All Cuts</strong><br/>
              WE ARE LICENSED BARBERS... MASTERS OF OUR CRAFT...  
              PROFESSIONAL SKILLS WITH CLIPPERS, SCISSORS, and RAZORS...  *ONLY 5  
              STAR SERVICE HERE AT ALL PRO BARBERSHOP... PLEASE TRY ALL OF 
              THE ALL PRO BARBERS
            </Typography>
            <Typography paragraph component='p' variant="h6" className={classes.text}>
              <strong>FEEL BRAND NEW</strong><br/>
              NOTHING LIKE THE ALL PRO BARBERSHOP EXPERIENCE TO GET  
              YOU READY FOR THE ALL PRO LIFE..... CUTS and Specialties: 
              (Short,Medium,or Long) Business-Fade-Comb Over-Under-
              Spike-Mohawk-Fohawk-FlatTop-Taper-LineUp-BEARD TRIMS
            </Typography>
            <Typography paragraph component='p' variant="h6" className={classes.text}>
              <strong>FINISHED PRODUCT</strong><br/>
              YOUR HAIRCUT IS VERY IMPORTANT TO US... PLEASE COMMUNICATE WHAT YOU'RE LOOKING FOR,
              AND BRING PICTURES ON YOUR PHONE TO HELP US... IF YOU HAVE TROUBLE...THAT'S OK...WE
              ARE PROFESSIONALS WITH MANY YEARS OF EXPERIENCE, SO WE WILL FIND THE RIGHT CUT FOR YOU... 
            </Typography>
          </div> 
      </Grid>
          
      <Grid item xs={6} className={classes.item}>
        <MediaCard src={"/images/barber.jpg"} 
          title={"Tools"} 
          description={"We buy scissors and razors from the best manufacturers"} 
          header={"The best and sharpest tools"}/>
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <MediaCard src={"/images/barber-img1.jpg"} 
          title={"Our room"} 
          description={"Here you can not only get a haircut but also relax"} 
          header={"Comfortable room"}/>
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <Accordeon />
      </Grid>
    </Grid> 
  </div>
  );
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContent);
