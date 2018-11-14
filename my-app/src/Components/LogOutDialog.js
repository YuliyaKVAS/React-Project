import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {logOut} from './../Helpers/users-api';

export default class LogOutDialog extends React.Component{

    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleLogOut = () => {
        logOut();
        this.props.setCurrentUser(null)
        this.setState({open: false})
        //window.location.href = '/home/';
    };

    render(){
        return(
        <div style={{margin:'24px',
                    float: 'right'}}>
            <Button onClick={this.handleClickOpen} variant="outlined" color="primary">Log out</Button>
            <Dialog
                open={this.state.open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Log out</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to Log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleLogOut} color="primary" variant="outlined">Log out</Button>
                    <Button onClick={this.handleClose} color="secondary" variant="outlined">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}