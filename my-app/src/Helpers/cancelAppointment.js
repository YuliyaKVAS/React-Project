import {getCurrentUser} from './users-api';

const getReservesLength = () => {
    const currentUserEmail = getCurrentUser().email;
    return JSON.parse(localStorage.getItem(currentUserEmail)).reserves.length;
}

const cancelAppointment = () => {
    
    if(getReservesLength() === 0){
        return {
            message: "User hasn't reserves!"
        }
    }else{
        const currentUserEmail = getCurrentUser().email;
        const currentUserName = getCurrentUser().name;
        const currentUserPassword = JSON.parse(localStorage.getItem(currentUserEmail)).password;
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

export {getReservesLength,cancelAppointment};