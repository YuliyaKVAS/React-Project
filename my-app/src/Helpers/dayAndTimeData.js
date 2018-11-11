
function createDates(){
    let today = new Date();
    let times = ['10:00', '11:00', '12:00', '14:00'];
    let options = [];
    for (let i = 0; i < 7; i++) {
        today.setDate(today.getDate() + 1);
        options.push({
            date : today.getDate() + "/" + 
                   today.getMonth() + "/" + 
                   today.getFullYear(),
            times: times.slice()
                });
    }

    return options;
}

export default createDates;