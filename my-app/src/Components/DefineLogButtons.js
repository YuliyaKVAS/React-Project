import React from 'react';
import FormDialogReg from './DialogForm';
import FormDialogAuto from './FormDialogAuto';
import LogOutDialog from './LogOutDialog';

class DefineLogButtons extends React.Component{
    
    render(){
        if(this.props.currentUser){
            return <LogOutDialog setCurrentUser={this.props.setCurrentUser} />
        }else{
            return (<div>
                <FormDialogReg />
                <FormDialogAuto setCurrentUser={this.props.setCurrentUser}/>
            </div>)
        }
    }
}
export default DefineLogButtons;