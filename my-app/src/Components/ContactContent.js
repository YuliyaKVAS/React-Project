import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MediaCard from './Images';

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
      <Grid Grid container spasing={24} style={{background:'black'}}>
        <Grid item sm={12} className={classes.grid}>
              <Typography variant ='h3' component="h5" className={classes.text}>
                Where you can find us
              </Typography>
              <Typography component="p" variant='h5' className={classes.text}>
              You can find us at the address below.
              </Typography>
        </Grid>
        <Grid item sm={6} className={classes.grid}>
        <MediaCard src={"/images/barber_building.jpg"}
          title={"Title"}
          description={"best people"}
          header={"Title"}
        />
        </Grid>
        <Grid item sm={4} className={classes.grid}>
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
            title={"Title"}
            description={"best people"}
            header={"Title"}
          />
        </Grid>
        <Grid item sm={4} className={classes.grid}>
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
