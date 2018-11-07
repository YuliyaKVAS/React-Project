import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServicesContent from './ServicesContent';
import Typography from '@material-ui/core/Typography';
import Types from './HomeContent';
import AboutUsContent from './AboutUsContent';
import ContactContent from './ContactContent';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class DefineContent extends React.Component{
  render(){
    const styles = theme =>({
      h1:{
        color: 'white',
      },
      p:{
        color:'blue'
      }
    })
    const value = this.props.value;
    if(value===0){
      return <Types />
    }
    if(value===1){
      return <AboutUsContent />
    }
    if(value===2){
      return <ServicesContent />
    }
    if(value===3){
      return <ContactContent />
    }
  }
}

export default DefineContent;
