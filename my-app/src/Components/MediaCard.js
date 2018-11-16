import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin:'auto',
    display: 'flex',
    cursor: 'default'
  },
  cardAction:{
    cursor: 'default'
  },
  media: {
    height: 140,
    cursor: 'default'
  },
  root:{
    float: 'left'
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
  <div className="classes.root">
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia
          className={classes.media}
          image={props.src}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.header}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
