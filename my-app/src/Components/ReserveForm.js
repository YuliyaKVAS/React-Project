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


const options = createDates();
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
        time: ''
    }

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

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Button onClick={this.handleClickOpen}>Select</Button>
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
                                    {options.map((item,i) => (<option value={i++}>{item.date}</option>))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="time-native-simple" disabled>Time</InputLabel>
                                <Select
                                    native
                                    value={this.state.time}
                                    onChange={this.handleChangeTime}
                                    input={<Input id="time-native-simple"/>}
                                >
                                    <option value=""/>
                                    {this.state.date!=="" && options[this.state.date].times.map((item, j) => (<option value={j++}>{item}</option>))}

                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>

                </Dialog>
            </div>
        )
    }

}

export default withStyles(styles)(ReserveForm);