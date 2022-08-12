//DOM ELELEMTS

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    namee = document.getElementById('name'),
    focus = document.getElementById('focus');


//SHOW TIME

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM OR PM

    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12hr format

    hour = hour % 12 || 12

    // OUTPUT TIME

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

 //CALL EVERY SECOND
    setTimeout(showTime, 1000)
}

//ADD ZERO

function addZero(n){
    return (parseInt(n, 10) < 10 ? "0" : "") + n
}

// set background and greeting

function setBgGreet(){
    let today = new Date()
    hour = today.getHours()

    if(hour < 12){
        document.body.style.backgroundImage = "url('../img/img1.jpg')"
        greeting.textContent = 'Good Morning';
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('../img/img2.jpg')"
        greeting.textContent = 'Good Afternoon';
        // document.body.style.color = "#000"
    }
    else{
        document.body.style.backgroundImage = "url('../img/img3.jpg')"
        greeting.textContent = 'Good Evening';
    }
    
}

// get name 
function getName(){
    if(localStorage.getItem('name') === null)[
        namee.textContent = "Enter Name"
    ]
    else{
        namee.textContent = localStorage.getItem('name')
    }
}

//set Name
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            // preventDefault()
            localStorage.setItem('name', e.target.innerText)
            namee.blur()
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText)
    }
}

// get focus 
function getFocus(){
    if(localStorage.getItem('focus') === null)[
        focus.textContent = "Enter Focus"
    ]
    else{
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            // preventDefault()
            localStorage.setItem('focus', e.target.innerText)
            focus.blur()
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText)
    }
}



namee.addEventListener('keypress', setName)
namee.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
//run
setBgGreet();
showTime();
getName();
getFocus()