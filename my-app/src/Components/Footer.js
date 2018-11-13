import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    //marginTop: 30,
    backgroundColor: "rgba(255, 125, 255, 0.19)",
    borderTop: 'solid 1px #827717',
    paddingTop: '16px',
    overflowX: 'hidden',
    overflowY: 'hidden',

  },
  footerSections:{
    padding: '0 16px'
  },
  subFooter:{
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: '8px 16 8px 16px',
    marginTop: '8px'
  },
  footerText:{
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  },
  iconButton:{
    fontSize: '4px',
    margin: 'auto'
  },
  grid:{
    textAlign: 'center'
  }

});



class Footer extends React.Component{


  render(){
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} className={classes.grid}>
          <Typography className={[classes.footerText, classes.footerSections]}>
            International beauty center
                  <br/>25 Carnaby Street, off 78
                  <br />LIVERPOOL
                  <br/>NR32 4WY
                  <br/>UK
                  <br/>+44-7871234567
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.grid}>
        <Typography className={[classes.footerText, classes.footerSections]}>
            To find more information about Barbershops follow
        </Typography>
        <Button href="https://en.wikipedia.org/wiki/Barbershop" color="primary" variant="outlined">
            Link
        </Button>
        <Typography className={[classes.footerText, classes.footerSections]}>
            To find more information about history of the barbershop follow
        </Typography>
        <Button href="https://www.complex.com/style/2016/04/an-in-depth-look-at-an-american-staple-the-barbershop" color="primary" variant="outlined">
            Link
        </Button>
        </Grid>

        <Grid item xs={12} sm={4} className={classes.grid}>
          <Button href="https://www.instagram.com/yuliya_donut/?hl=bn" className={classes.iconButton}>
          <img alt=" "
              src="/images/icons8-instagram-48.png"
          />
          </Button>
          <br/>
          <Button href="https://vk.com/id154603815" className={classes.iconButton}>
          <img alt=" "
              src="/images/icons8-vk.com-48.png"
          />
          </Button>

        </Grid>
        <Grid className={[classes.subFooter, classes.grid]} item xs={12}>
          <span className={classes.footerText}>©  {currentYear} All Rights Reserved</span>
        </Grid>
      </Grid>
    </div>
  );
}
}



export default withStyles(styles)(Footer);
