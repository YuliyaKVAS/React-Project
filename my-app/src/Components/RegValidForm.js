import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class MyForm extends React.Component {

    state = {
        user:{
          email: '',
          password:'',
          repeatPassword:''
        },
    };
    ComponentDidMount(){
      // custom rule will have name 'isPasswordMatch'
      ValidatorForm.addValidationRule('isPasswordMatch', (value) =>{
        if(value!==this.state.user.password){
          return false;
        }
        return true;
      });
    }

    handleChange = (event) => {
      const {user} = this.state;
      user[event.target.name] = event.target.value;
      this.setState({user});
    }

    
    return(){
      const {user} = this.state;
    }

}

export default MyForm;
