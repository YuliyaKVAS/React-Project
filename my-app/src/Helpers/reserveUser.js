import {getCurrentUser} from './users-api';
const reserveUser = (day, time) => {
    const currentUserEmail = getCurrentUser().email;
    const currentUserName = getCurrentUser().name;
    const currentUserPassword = getCurrentUser().password;
    const reservedDates = JSON.parse(localStorage.getItem(currentUserEmail)).reserves;
    reservedDates.push({date: day, time: time});
    const updatedUserValue = {
        name: currentUserName,
        password: currentUserPassword,
        reserves: reservedDates
    }
    return localStorage.setItem(currentUserEmail, JSON.stringify(updatedUserValue))


}

const deleteReservedTime = (options, index, time_index) => {
    console.log("times array: " + options[index].times)
    if(options[index].times.length===1){
        options.splice(index,1);
        return
    }else{
        options[index].times.splice(time_index,1);
        return
    }
}

export {reserveUser, deleteReservedTime};