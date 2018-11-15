
function generate() {
    let today = new Date();
    let times = ['10:00', '10:30', '10:40',  '11:00', '12:00',
                '13:00', '13:40', '14:00', '15:00', '16:00',
                '17:00', '19:00', '19:30', '20:00', '20:30'];
    let options = [];
    for (let i = 0; i < 7; i++) {
        today.setDate(today.getDate() + 1);
        options.push({
            date : today.getDate() + "/" + 
                   Number(today.getMonth()+1) + "/" + 
                   today.getFullYear(),
            times: times.slice()
                });
    }

    localStorage.setItem("availibleDates", JSON.stringify(options))
}

function fetchAvailibleData(){
    if(localStorage.getItem("availibleDates") == null){
        generate()
    }
    return JSON.parse(localStorage.getItem("availibleDates"));
};

export {fetchAvailibleData}

