import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import {cancelAppointment} from './../Helpers/cancelAppointment';

class CancelReserves extends React.Component{
    state={
        isCancelDialogOpen: false,
        isErrorDialogOpen: false
    };

    handleCancelDialogOpen = () => {
        const cancel = cancelAppointment();
        if(cancel.message==="User hasn't reserves!"){
            this.setState({isErrorDialogOpen: true})
        }
        else{
            this.setState({isCancelDialogOpen: true});
        }
        
    };

    handleErrorDialogClose = () => {
        this.setState({isErrorDialogOpen: false});
    }

    handleCloseCancelDialog = () => {
        this.setState({isCancelDialogOpen: false});
    };

    handleSubmitCancel = () => {
        cancelAppointment();
        this.setState({isCancelDialogOpen: false});
    };

    render(){
        if(this.state.isErrorDialogOpen){
            return <Dialog
                    open
                    onClose={this.handleErrorDialogClose}
                    aria-lebelledby="error-dialog"
            >
                <DialogTitle id="error-dialog">Error</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    User hasn't reserves!
                    </DialogContentText>
                </DialogContent>
                <Button onClick={this.handleErrorDialogClose} variant="text" color="secondary">Close</Button>
            </Dialog>
        }

        if(this.state.isCancelDialogOpen){
            return <Dialog
                    open
                    onClose={this.handleCloseCancelDialog}
                    aria-lebelledby="cancel-dialog"
            >
                <DialogTitle id="cancel-dialog">Cancel</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure?
                    </DialogContentText>
                </DialogContent>
                <Button onClick={this.handleSubmitCancel} variant="text" color="primary">Yes</Button>
                <Button onClick={this.handleCloseCancelDialog} variant="text" color="primary">No</Button>
            </Dialog>
        }
        return <Button onClick={this.handleCancelDialogOpen} variant="text" color="secondary">Cancel appointment</Button>
    }
}

export default CancelReserves;