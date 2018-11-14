import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const styles = {
  root: {
    width: '100%',
    //maxWidth: 800,
    //padding: '24px',
    //margin: 'auto',
    marginBottom: 0,
    overflowX: 'hidden'
  },
  paper:{
    margin:'24px',
    padding: '24px'
  },
  item:{
    marginTop:'32px',
    justify: 'center',
    marginBottom: '16px',
    padding: '8px',
  },
  text:{
    color: 'white',
    padding: '8px',
    margin: '4px'
   // textAlign: 'center'
  }
};

function AboutUsContent(props){
  const {classes} = props;

  return(
  <div className={classes.root}>
  <Grid container spasing={24} style={{background:'rgba(0,0,155,0.1)'}} >
      <Grid item sm={4} >
        <Paper className={classes.paper}><Typography variant="h5" component="h3">
        The main concept of our salon is quality
        </Typography>
        <Typography component="p">
        All our masters are professionals
        </Typography></Paper>
      </Grid>
      <Grid item sm={4} >
          <Paper className={classes.paper}><Typography variant="h5" component="h3">
          The atmosphere in our salon will allow you to relax
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography></Paper>
      </Grid>
      <Grid item sm={4} >
          <Paper className={classes.paper}><Typography variant="h5" component="h3">
            Сonvenient location of our salon
        </Typography>
        <Typography component="p">
          will allow you to save your time
        </Typography></Paper>
      </Grid>
      <Grid item sm={6} >
        <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
        title={"Materials and cosmetic"}
        description={"We care about your health using only hypoallergenic cosmetics"}
        header={"Only high-quality materials and cosmetics"}
      />
      </Grid>
      <Grid item sm={6} >
        <MediaCard src={"/images/coffee.jpg"}
        title={"Coffee"}
        description={"We have all kinds of coffee and tea as well as other drinks"}
        header={"We offer all our customers tea and coffee"}
      />
      </Grid>
      <Grid item sm={12}>
        <Typography paragraph component='p' variant="h6" className={classes.text}>
          We believe that it is important not only to give you beautiful and fashionable 
          haircuts, but also to give you the opportunity to have a good time. Our hairdressers 
          will bring you coffee and tea and you can relax while you are being cut
        </Typography>
        <Typography paragraph component='p' variant="h6" className={classes.text}>
          A lot of our customers come back to us! We want you to come back to us again and again.
          Also we will be happy if you invite your friends to us.
        </Typography>
      </Grid>
    </Grid>
    </div>


  )
}

AboutUsContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsContent);
