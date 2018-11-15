import {getCurrentUser} from './users-api';
const reserveUser = (day, time) => {
    const currentUserEmail = getCurrentUser().email;
    const currentUserName = getCurrentUser().name;
    const currentUserPassword = JSON.parse(localStorage.getItem(currentUserEmail)).password;
    console.log("Current user obj: " + (localStorage.getItem("currentUser")))
    console.log("Current password: " + currentUserPassword);
    const reservedDates = JSON.parse(localStorage.getItem(currentUserEmail)).reserves;
    reservedDates.push({date: day, time: time});
    const updatedUserValue = {
        name: currentUserName,
        password: currentUserPassword,
        reserves: reservedDates
    }
    return localStorage.setItem(currentUserEmail, JSON.stringify(updatedUserValue))


}

const deleteReservedTime = (options, index, time) => {
    console.log("times array: " + options[index].times)
    if(options[index].times.length===1){
        options.splice(index,1);
        //return
        return localStorage.setItem("availibleDates", JSON.stringify(options))
    }else{
        options[index].times.splice(time,1);
        //return
        return localStorage.setItem("availibleDates", JSON.stringify(options))
    }
}

export {reserveUser, deleteReservedTime};