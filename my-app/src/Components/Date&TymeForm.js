import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import createDates from './../Helpers/dayAndTimeData';
import {reserveUser, deleteReservedTime} from '../Helpers/reserveUser';
import { DialogContentText } from '@material-ui/core';




//const options = createDates();

class SelectDialog extends React.Component{
  state = {
    open: false,
    isSubDialogOpen: false,
    date: '',
    time: '',
    options: createDates(),
    isDateNotFilledOpen:false,
    isTimeNotFilledOpen: false
  }

  /*componentDidMount(){
    this.setState({options: createDates()})
  }*/

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClickClose = () => {
    this.setState({open: false});
  };

  handleChangeDate = (event) => {
    this.setState({date: Number(event.target.value)})
  };

  handleChangeTime = (event) => {
    this.setState({time: (event.target.value)})
  }

  handleClickSubDialogOpen = () => {
      if(this.state.date===''){
        this.setState({isDateNotFilledOpen: true});
      }else{
        this.setState({isSubDialogOpen:true})
      }
      
  };

  handleCloseSubDialog = () => {
    this.setState({isSubDialogOpen:false});
  }
  handleSubmitTime = () => {
    if(this.state.time===""){
      this.setState({isSubDialogOpen: false});
      this.setState({isTimeNotFilledOpen:true});
      //
    }else{
      reserveUser(this.state.options[this.state.date].date, this.state.options[this.state.date].times[this.state.time]);
      deleteReservedTime(this.state.options, this.state.date, this.state.time);
      this.setState({isSubDialogOpen: false});
      this.setState({open: false});
    } 
  }

  handleDateNotFilledClose = () => {
    this.setState({isDateNotFilledOpen:false});
  };

  handleTimeNotFilledClose = () => {
    this.setState({isTimeNotFilledOpen: false});
    this.setState({isSubDialogOpen:true});
  }


  render(){
    // console.log("this.state.date: "+this.state.date);
    // console.log("this.state.time: "+this.state.time);
    if(this.state.isSubDialogOpen){
      return(
        <div>
          <Dialog
            open={this.state.isSubDialogOpen}
            onClose = {this.handleCloseSubDialog}
          >
            <DialogTitle>Please, choose the time</DialogTitle>
            <DialogContent>
              <form>
                <FormControl>
                  <InputLabel htmlFor="time-native-simple">Time</InputLabel>
                  <Select
                    native
                    value={this.state.time}
                    onChange={this.handleChangeTime}
                    input={<Input id="time-native-simple"/>}
                  > 
                    <option value="" />
                    {this.state.options[this.state.date].times.map((item, j) => (<option value={j++}>{item}</option>))}
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSubmitTime} color="primary">Reserve</Button>
              <Button onClick={this.handleCloseSubDialog} color="secondary">Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }

    if(this.state.isDateNotFilledOpen){
      return <Dialog
        open
        onClose={this.handleDateNotFilledClose}
        aria-labelledby="form-dialog"
      >
      <DialogTitle id="form-dialog">Something has gone wrong</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please, choose the date
        </DialogContentText>
      </DialogContent>
      <Button onClick={this.handleDateNotFilledClose} color="secondary">Close</Button>
      </Dialog>
    }

    if(this.state.isTimeNotFilledOpen){
      return <Dialog
        open
        onClose={this.handleTimeNotFilledClose}
        aria-labelledby="form"
      >
      <DialogTitle id="form">Something has gone wrong</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please, choose the time
        </DialogContentText>
      </DialogContent>
      <Button onClick={this.handleTimeNotFilledClose} color="secondary">Close</Button>
      </Dialog>
    }
    
    return(
      <div style={{display: 'flex', justifyContent:"center"}}>
        <Button onClick={this.handleClickOpen} variant="extendedFab" color="primary">Select Data</Button>
        <Dialog
          open={this.state.open}
          onClose = {this.handleClickClose}
        >
          <DialogTitle>Please, choose the date</DialogTitle>
          <DialogContent>
            <form>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Date</InputLabel>
                <Select
                  native
                  value={this.state.date}
                  onChange = {this.handleChangeDate}
                  input={<Input id ="age-native-simple"/>}
                >
                  <option value="" />
                  {this.state.options.map((item,i) => (<option value={i++}>{item.date}</option>))}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickSubDialogOpen} color="primary">Confirm Data</Button>
            <Button onClick={this.handleClickClose} color="secondary">Cancel</Button>
          </DialogActions>

        </Dialog>
      </div>
    )
  }


}

export default SelectDialog;