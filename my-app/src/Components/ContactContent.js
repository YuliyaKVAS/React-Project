import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';

const styles = {
  text:{
    color: 'white',
    padding: '24px'
  },
  grid:{
    margin: 'auto',
    padding: '36px',

  }
}
function ContactContent(props){
  const {classes} = props;
  return(
    <div>
      <Grid Grid container spasing={24} style={{background:'rgba(0,0,255,0.1)'}}>
        <Grid item sm={12} className={classes.grid}>
              <Typography variant ='h3' component="h6" className={classes.text}>
                Where you can find us
              </Typography>
              <Typography component="p" variant='h6' className={classes.text}>
              You can find us at the address below.
              </Typography>
        </Grid>
        <Grid item sm={6} className={classes.grid}>
        <MediaCard src={"/images/barber_building.jpg"}
          title={"Barbershop building"}
          description={"You will see the building of our barbershop as soon as you exit the metro."}
          header={"Our berbershop"}
        />
        </Grid>
        <Grid item sm={6} className={classes.grid}>
                <Typography variant ='h4' component="h5" className={classes.text} >
                    Our address:
                </Typography>
                <Typography component="p" variant='h6' className={classes.text}>
                  25 Carnaby Street, off 78<br/>
                  LIVERPOOL<br/>
                  NR32 4WY<br/>
                  UK
                  
                </Typography>
        </Grid>
        <Grid item sm={6} className={classes.grid}>
          <MediaCard src={"/images/map-img4.jpg"}
            title={"Map"}
            description={"We are located at 25 Carnaby Street, off 78. If you're late, please call us"}
            header={"Our location on the map"}
          />
        </Grid>
        <Grid item sm={6} className={classes.grid}>
        <Typography component="p" variant="h6" className={classes.text}>
            The nearest metro station is Aldgate East<br/>
            turn left when exiting the metro<br />
            For all questions <strong>please call:</strong><br/>
            +44-7871234567
        </Typography>
        </Grid>
      </Grid>
    </div>
  );

}
ContactContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactContent);
