import React from 'react';
import RegistrationForm from './RegistrationForm';
import AuthorizationForm from './AuthorizationForm';
import LogOutDialog from './LogOutDialog';

class DefineLogButtons extends React.Component{
    
    render(){
        if(this.props.currentUser){
            return <LogOutDialog setCurrentUser={this.props.setCurrentUser} />
        }else{
            return (<div>
                <RegistrationForm />
                <AuthorizationForm setCurrentUser={this.props.setCurrentUser}/>
            </div>)
        }
    }
}
export default DefineLogButtons;