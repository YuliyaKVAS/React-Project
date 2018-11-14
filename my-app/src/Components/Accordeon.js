import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '90%',
    margin: 'auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#FAFAFA',
  },
  panel:{
    backgroundColor: "#9E9E9E"
  },
  text:{
    color: '#FAFAFA',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  }
});

function Accordeon(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Frequently asked Questions</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            What is the difference between a barbershop and a simple hairdressing salon?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Barber shops generally have a different atmosphere from salons in that the 
            waiting area and services are geared toward men’s tastes. Barber shops
            provide a much, much simpler menu of services, generally haircut,
            beard trim, shave, and an occasional shampoo.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            When to Go to a Barber?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The best choice is a barber if you're looking for a short, traditional 
            style haircut such as a buzzcut, flattop, fade, or military-style cut. 
            Barbers will ask you how you want your hair cut and do what you ask, 
            normally without much feedback.
            Most barbers are cheaper than stylists, so you can save a bit of money going to 
            a  good barber if that's a priority for you. A haircut you get from a barber will 
            be simple and easy to maintain and won't require a lot of styling product.
            If that's you, a barber is the right fit. If you want a shave, you can only
            get that at a barbershop.
            Many upscale barbershops offer hot lather face shaves, which are a real treat. 
            Last but not least: You're looking to escape. Barbershops can be a great source 
            of camaraderie between guys. Typically no-frills places, barbershops are a uniquely 
            male gathering spot.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            When to Go to a Salon Stylist?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            If you're going longer, you will likely be happier with a salon cut.
            Stylists generally have more experience cutting and styling longer hair.
            Ditto for if you want color: Most barbers do not do a lot of color 
            services, so you'll likely get better results from a stylist who is more
            knowledgeable. If you want a more trendy, fashion-forward cut, a stylist 
            is usually more aware of current trends than a barber. If you want a new 
            style, a stylist can make suggestions for a style that will flatter your
            features better.
            You'll also find an array of products in a salon that you won't find 
            in a barbershop, and your stylist can suggest the right one for you 
            and how to use it.  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            How can I make an appointment to your salon?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            All you need to do is register on our website, then log in.
            On the <strong>My Profile</strong> page you can make an appointment by choosing
            a convenient day and time.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}

Accordeon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accordeon);
