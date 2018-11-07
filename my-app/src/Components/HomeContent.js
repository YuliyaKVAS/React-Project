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

const styles = {
  root: {
    width: '100%',
    overflowX: 'hidden'
    //maxWidth: 800,
    //padding: '24px',
    //margin: 'auto',
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
    justify: 'center'
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
      <Grid item sm={7} className={classes.item}>
        <Typography variant='h1' component="h3" className={classes.text}>barbershop</Typography>
        <Typography component='p' variant='h6' className={classes.text}>
        the place where you get smarter
        <br />the place where you get smarter
        <br />the place where you get smarter
        </Typography>
      </Grid>
      <Grid item sm={5} className={classes.item}>
      </Grid>

          <Grid item xs={6} className={classes.item}>
            <MediaCard src={"/images/blackandwhite.ProperBarbershop-6.jpg"}
            title={"Title"}
            description={"best people"}
            header={"Title"}
            />
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <MediaCard src={"/images/TexasRichardson_barberShop.jpg"} title={"hfhf"} description={"hd"} header={"nnd"}/>
          </Grid>
          <Grid item sm={6} className={classes.item}>
              <MediaCard src={"/images/barber.jpg"} title={"hfhf"} description={"hd"} header={"nnd"}/>
          </Grid>
          <Grid item sm={6} className={classes.item}>
              <MediaCard src={"/images/barber-img1.jpg"} title={"hfhf"} description={"hd"} header={"nnd"}/>
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
