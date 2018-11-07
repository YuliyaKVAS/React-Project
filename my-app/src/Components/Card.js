import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Images';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card:{
    minWidth: '100%',
    borderTop: 'solid 1px black',
    borderBottom: 'solid 1px black',
    borderRadius: 0,
    paddingTop: 0
  },
  img:{
    height: '300px',
    marginBottom: '-4px'
  }
};

function MyCard(props){
  const { classes } = props;
  return(
    <Card className={classes.card}>
      <img
      className={classes.img}
      src='/images/barber-img1.jpg'
      style={{ width: '100%' }}
      />
    </Card>
  )
};

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCard);
