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
    padding: '36px'
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
        </Grid>
        <Grid item sm={6} className={classes.grid}>
        <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
          title={"Title"}
          description={"best people"}
          header={"Title"}
        />
        </Grid>
        <Grid item sm={4} className={classes.grid}>
                <Typography variant ='h4' component="h5" className={classes.text} >
                    jfjjjdjjdd
                </Typography>
                <Typography component="p" className={classes.text}>
                    jdjddhd<br/>
                    hfhhhfhfhfhh
                </Typography>
        </Grid>
        <Grid item sm={6} className={classes.grid}>
          <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
            title={"Title"}
            description={"best people"}
            header={"Title"}
          />
        </Grid>
        <Grid item sm={4} className={classes.grid}>
        <Typography variant ='h3' component="h5" className={classes.text} >
            jfjjjdjjdd
        </Typography>
        <Typography component="p" className={classes.text}>
            jdjddhd<br/>
            hfhhhfhfhfhh
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
