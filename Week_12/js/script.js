window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()]?.classList.add(('today'));
})

// setTimeout() - Sadece bir kez çalışmasını istediğimi kod blokları için..
setTimeout( 
    function() { 

        document.querySelector("#kampanya-kutu").classList.remove("d-none")

        setTimeout( function() {
            document.querySelector("#kampanya-kutu")?.classList.add("d-none")
         } , 4000 )

    } , 2000) //1000ms = 1sn

// setInterval() - Belirli aralıklarla çalışmasını istediğimi kod blokları için..
setInterval( function() {
    if( document.querySelector("#bizi-arayin").classList.contains("d-none") ) {
        document.querySelector("#bizi-arayin").classList.remove("d-none") //göster
    } else {
        document.querySelector("#bizi-arayin").classList.add("d-none") //gizle
    }
} , 500  )