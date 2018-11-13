import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormDialogAuto from './FormDialogAuto';
import LogOutDialog from './LogOutDialog';

class DefineLogButtons extends React.Component{
    
    render(){
        if(this.props.currentUser){
            return <LogOutDialog setCurrentUser={this.props.setCurrentUser} />
        }else{
            return (<div>
                <RegistrationForm />
                <FormDialogAuto setCurrentUser={this.props.setCurrentUser}/>
            </div>)
        }
    }
}
export default DefineLogButtons;