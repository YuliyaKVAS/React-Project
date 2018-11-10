import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavTab from './NavTab';
//import CustomizedTable from './ServicesContent';
import DefineContent from './DefineContent';
//import OutlinedButtons from './Registration';
//import OutlinedTextFields from './PopUpRegistration';
//import MyForm from './RegValidForm';
import FormDialogReg from './DialogForm';
import FormDialogAuto from './FormDialogAuto';
import Footer from './Footer';
import MyCard from './Card';
import {getCurrentUser, logOut} from './../Helpers/users-api';
import LogOutDialog from './LogOutDialog';
import DefineLogButtons from './DefineLogButtons';



const styles = theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden'
  },
  grid:{
    background: 'red',
  }
});

class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      //currentUser: null
      currentUser: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  setCurrentUser = (user) => {
      if(user){
        this.setState({
          currentUser: {
            email: user.email,
            name: user.name
          }
        })
      }else {
        this.setState({
          currentUser: null
        })
      }
  }

  componentDidMount(){
    this.setCurrentUser(getCurrentUser())
  }

  render(){
//  const {classes} = props;

  return (
      <Grid container spasing={24} style={{background:'#424242'}} >
      <Grid item xs={12}>          
          <NavTab value={this.state.value} handleChange={this.handleChange} currentUser={this.state.currentUser}/>
          {this.state.currentUser && <h2 style={{color: 'white'}}>Hello, {this.state.currentUser.name}</h2>}
          {/*<FormDialogReg currentUser={this.state.currentUser}/>
          <FormDialogAuto setCurrentUser={this.setCurrentUser}/>
           <LogOutDialog />*/}
           <DefineLogButtons setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
          <DefineContent value={this.state.value}/>
          <Footer />
      </Grid>
      </Grid>
  )
}
}

/*Wrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default Wrapper;
