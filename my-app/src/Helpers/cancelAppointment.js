import {getCurrentUser} from './users-api';

const cancelAppointment = () => {
    const currentUserEmail = getCurrentUser().email;
    const currentUserName = getCurrentUser().name;
    const currentUserPassword = JSON.parse(localStorage.getItem(currentUserEmail)).password;
    if(JSON.parse(localStorage.getItem(currentUserEmail)).reserves.length===0){
        return {
            message: "User hasn't reserves!"
        }
    }else{
        const updatedUserValue = {
            name: currentUserName,
            password: currentUserPassword,
            reserves: []
        };
    
        localStorage.setItem(currentUserEmail, JSON.stringify(updatedUserValue));
        return {
            message: "All reserves are canceled"
        }
    }
    
};

export {cancelAppointment};