import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CustomizedTable from './CustomizedTable';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100%',
    maxWidth: 800,
    padding: '24px',
    margin: 'auto'
  },
  font:{
    color: 'white',
  },
  paper:{
    margin:'24px',
    padding: '24px'
  }
};

function ServicesContent(props){
  const {classes} = props;
  return(
    <div className={classes.root}>
      
      <CustomizedTable />
    </div>
  );
}

ServicesContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesContent);
