import {getCurrentUser} from './users-api';

const checkAppointment = () => {
    const currentUserEmail = getCurrentUser().email;
    if(JSON.parse(localStorage.getItem(currentUserEmail).reserves.length===0)){
        return false;
    }
    else{
        return localStorage.getItem(currentUserEmail).reserves;
    }
};

export {checkAppointment};