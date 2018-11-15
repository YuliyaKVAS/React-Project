import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavTab from './NavTab';
import DefineContent from './DefineContent';
import Footer from './Footer';
import {getCurrentUser} from './../Helpers/users-api';
import DefineLogButtons from './DefineLogButtons';

class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
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
        this.setState(({value}) => ({
          currentUser: null,
          value: value === 4 ? 0 : value
        }))
      }
  }

  componentDidMount(){
    this.setCurrentUser(getCurrentUser())
  }

  render(){

  return (
      <Grid container spasing={24} style={{background:'#424242'}} >
      <Grid item xs={12}>          
          <NavTab value={this.state.value} handleChange={this.handleChange} currentUser={this.state.currentUser}/>
          {this.state.currentUser && <h2 style={{color: 'white'}}>Hello, {this.state.currentUser.name}</h2>}
           <DefineLogButtons setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
          <DefineContent value={this.state.value} />
          <Footer />
      </Grid>
      </Grid>
  )
}
}

export default Wrapper;
