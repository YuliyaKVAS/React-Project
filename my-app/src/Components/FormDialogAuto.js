import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createUser, signIn} from './../Helpers/users-api';


export default class FormDialogAuto extends React.Component {
  state = {
    open: false,
    name: '',
    email: '',
    password: '',
    isErrorFillingOpen: false,
    isNoUserOpen: false,
    isWrongPasswordOpen: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleSignIn = () => {
    console.log(signIn({email: this.state.email,
                        password: this.state.password}))
    const obj = signIn({
      email: this.state.email,
      password: this.state.password
    });

    this.props.setCurrentUser(obj.currentUser);
    //this.props.setCurrentUser(obj);
    if(obj.isSignIn){
      this.setState({open: false})
    }
    else if(obj.errorMsg==="All fields must be filled"){
      this.setState({isErrorFillingOpen: true});
    }
    else if(obj.errorMsg==="No such user exists"){
      this.setState({isNoUserOpen: true});
    }
    else if(obj.errorMsg==="Wrong password"){
      this.setState({isWrongPasswordOpen: true});
    }

  }

  handleErrFillClose = () => {
    this.setState({isErrorFillingOpen: false});
  };

  handleNoUserClose = () => {
    this.setState({isNoUserOpen: false});
  };

  handleWrongPassClose = () => {
    this.setState({isWrongPasswordOpen: false});
  };


  render() {
    if(this.state.isErrorFillingOpen){
      return <Dialog
        open
        onClose={this.handleErrFillClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Sorry, something has gone wrong.</DialogTitle>
      <DialogContent>
        <DialogContentText>
        All fields must be filled
        </DialogContentText>
      </DialogContent>
        <Button onClick={this.handleErrFillClose} color="secondary" variant="outlined">
          Close
        </Button>
    </Dialog>
    }

    if(this.state.isNoUserOpen){
      return <Dialog
        open
        onClose={this.handleNoUserClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Sorry, something has gone wrong 🤕.</DialogTitle>
      <DialogContent>
        <DialogContentText>
          No such user exists!
        </DialogContentText>
      </DialogContent>
        <Button onClick={this.handleNoUserClose} color="secondary" variant="outlined">
          Close
        </Button>
    </Dialog>
    }

    if(this.state.isWrongPasswordOpen){
      return <Dialog
        open
        onClose={this.handleWrongPassClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Sorry, something has gone wrong 🤕.</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wrong Password!
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
        <Button onClick={this.handleClickOpen} variant="outlined" color="primary">Sign In</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Autorization</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSignIn} color="primary" variant="outlined" >
              Sign in
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
