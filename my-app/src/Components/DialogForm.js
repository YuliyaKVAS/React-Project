import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createUser, signIn} from './../Helpers/users-api';
import CreateSomething from './CreateSomething';

export default class FormDialogReg extends React.Component {
  state = {
    open: false,
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    isSuccessfullRegistrationDialogOpen: false,
    isSuchUserExistsOpen: false,
    isWrongPassOpen: false,
    isErrFillOpen: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubDialogClose = () => {
    this.setState({isSuccessfullRegistrationDialogOpen: false});
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
}

  handleChangePassword = (event) => {
  this.setState({password: event.target.value});
}

  handleChangeRepeatPassword = (event) => {
  this.setState({repeatPassword: event.target.value});
}

  handleSignUp = () => {
  const obj = createUser({name: this.state.name,
                          email: this.state.email,
                          password: this.state.password,
                          repeatPassword: this.state.repeatPassword});
  if(obj.isUserCreated){
    this.setState({open: false, isSuccessfullRegistrationDialogOpen: true})

  }
  else if(obj.errorMsg==="All inputs should be"){
    this.setState({isErrFillOpen: true});
  }
  else if(obj.errorMsg ==="Password does't matches"){
    this.setState({isWrongPassOpen: true});
  }
else if(obj.errorMsg==="User already exist"){
  this.setState({isSuchUserExistsOpen: true});
}
}

handleErrFillClose = () => {
  this.setState({isErrFillOpen: false});
}

handleWrongPassClose = () => {
  this.setState({isWrongPassOpen: false});
}

handleUserExistsClose = () =>{
  this.setState({isSuchUserExistsOpen: false});
}

  render() {

    if(this.state.isSuccessfullRegistrationDialogOpen){
      return <Dialog
        open
        onClose={this.handleSubDialogClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Welcome, {this.state.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send
          updates occasionally.
        </DialogContentText>
        //<CreateSomething/>
        </DialogContent>
        <Button onClick={this.handleSubDialogClose} color="secondary" variant="outlined">
          Close
        </Button>
      </Dialog>
    }

    if(this.state.isErrFillOpen){
      return <Dialog
        open
        onClose={this.handleErrFillClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Something has gone wrong 🤕</DialogTitle>
      <DialogContent>
        <DialogContentText>
        All fields must be filled!
        </DialogContentText>
        </DialogContent>
        <Button onClick={this.handleErrFillClose} color="secondary" variant="outlined">
          Close
        </Button>
      </Dialog>
    }

    if(this.state.isSuchUserExistsOpen){
      return <Dialog
        open
        onClose={this.handleUserExistsClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Something has gone wrong 🤕</DialogTitle>
      <DialogContent>
        <DialogContentText>
          User already exists!
        </DialogContentText>
        </DialogContent>
        <Button onClick={this.handleUserExistsClose} color="secondary" variant="outlined">
          Close
        </Button>
      </Dialog>
    }

    if(this.state.isWrongPassOpen){
      return <Dialog
        open
        onClose={this.handleWrongPassClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Something has gone wrong 🤕</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wrong password! 🤦‍♂
        </DialogContentText>
        </DialogContent>
        <Button onClick={this.handleWrongPassClose} color="secondary" variant="outlined">
          Close
        </Button>
      </Dialog>
    }

    return (
      <div style={{margin:'24px',
                  float: 'right'}}>
        <Button onClick={this.handleClickOpen} variant="outlined" color="primary">Sign Up</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Registration</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              onChange={this.handleChangeName}
              value={this.state.name}
            />
            <TextField
              //autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={this.handleChangeEmail}
              value={this.state.email}
            />
            <TextField
              //autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              onChange={this.handleChangePassword}
              value={this.state.password}
            />
            <TextField
              //autoFocus
              margin="dense"
              id="repeatPassword"
              label="Repeat password"
              type="password"
              fullWidth
              onChange={this.handleChangeRepeatPassword}
              value={this.state.repeatPassword}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSignUp} color="primary" variant="outlined" >
              Sign up
            </Button>
            <Button onClick={this.handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>


      </div>
    );
  }
}
