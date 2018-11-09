import React from 'react';
import FormDialogReg from './DialogForm';
import FormDialogAuto from './FormDialogAuto';
import LogOutDialog from './LogOutDialog';

class DefineLogButtons extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.currentUser){
            return <LogOutDialog />
        }else{
            return (<div>
                <FormDialogReg />
                <FormDialogAuto setCurrentUser={this.props.setCurrentUser}/>
            </div>)
        }
    }
}
export default DefineLogButtons;