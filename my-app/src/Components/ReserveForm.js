import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import createDates from './../Helpers/dayAndTimeData';
import {reserveUser, deleteReservedTime} from '../Helpers/reserveUser';
import { DialogContentText } from '@material-ui/core';


const styles = {
    root:{
        display: "flex",
        justify: 'center',
    },
    dialog:{
        display: "flex",
        justify: 'center',
    },
}

class ReserveForm extends React.Component{
    state = {
        open: false,
        date: '',
        time: '',
        options: null,
        isErrorDialogOpen: false
    }

    setOptions = (data) => {
        if(data){
            this.setState({
                options: data
            });
        }else{
            this.setState({
                options:null
            })
        }
        
    } 

    componentDidMount(){
        this.setOptions(createDates());
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClickClose = () => {
        this.setState({open: false});
    };

    handleChangeDate = (event) => {
        this.setState({date: event.target.value});
    };

    handleChangeTime = (event) => {
        this.setState({time: event.target.value});
    };

    handleSubmitData = () => {
      if(!this.state.date || !this.state.time){
        this.setState({isErrorDialogOpen: true});
      }else{
        reserveUser(this.state.options[this.state.date].date, this.state.options[this.state.date].times[this.state.time]);
        deleteReservedTime(this.state.options, this.state.date, this.state.time);
        this.setState({open: false});
      }
      
    };

    handleErrorDialogClose  = () => {
        this.setState({isErrorDialogOpen: false});
    };

    render(){
        const { classes } = this.props;
        if(this.state.isErrorDialogOpen){
            return <Dialog
                    open
                    onClose={this.handleErrorDialogClose}
                    aria-lebelledby="form"
                   >
                    <DialogTitle id="form">Something has gone wrong!</DialogTitle> 
                    <DialogContent>
                        <DialogContentText>
                            You should choose both date and time!
                        </DialogContentText>
                    </DialogContent>
                    <Button onClick={this.handleErrorDialogClose} variant="text" color="secondary">Close</Button>
                   </Dialog>
        }
        return(
            <div style={{display: 'flex', justifyContent:"center"}}>
                <Button onClick={this.handleClickOpen} variant="extendedFab" color="primary">Make an appointment</Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClickClose}
                >
                    <DialogTitle>Please, choose date and time</DialogTitle>
                    <DialogContent >
                        <form className={classes.dialog}>
                            <FormControl>
                                <InputLabel htmlFor="date-native-simple">Date</InputLabel>
                                <Select
                                    native
                                    value={this.state.date}
                                    onChange={this.handleChangeDate}
                                    input={<Input id="date-native-simple" />}
                                >
                                    <option value="" />
                                    {this.state.options && this.state.options.map((item,i) => (<option value={i++}>{item.date}</option>))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="time-native-simple">Time</InputLabel>
                                <Select
                                    disabled={!this.state.date}
                                    native
                                    value={this.state.time}
                                    onChange={this.handleChangeTime}
                                    input={<Input id="time-native-simple"/>}
                                >
                                    {this.state.date && <option value=""/>}
                                    {this.state.date!=="" && this.state.options[this.state.date].times.map((item, j) => (<option value={j++}>{item}</option>))}

                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                <Button onClick={this.handleSubmitData} variant="text" color="primary">Make appointment</Button>
                <Button onClick={this.handleClickClose} variant="text" color="secondary">Close</Button>    
                </Dialog>
            </div>
        )
    }

}

export default withStyles(styles)(ReserveForm);