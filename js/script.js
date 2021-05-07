let currentData = document.querySelector('.currentData');
let monthNames = new Array('January','February', 'March', 'April','May', 'June', 'July', 'August','September', 'October', 'November','December');
let now = new Date();

currentData.innerHTML = now.getDate() + " " + monthNames[now.getMonth()] + " " + now.getFullYear();

// script for data-end

let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    let rand = Math.floor(Math.random() * (15 - 5) + 5);
    $('.data-end-place').text(rand)
    $('.data-end-scr').text(today)