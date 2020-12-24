let divOn= document.getElementById('div-on');
let divOff= document.getElementById('div-off');
let modeSwitch= document.getElementById('mode-switch');
let cloudIcons= document.getElementsByClassName('cloud');
let mainHeader= document.getElementById('main-header');
let profile= document.getElementById('profile');
let navbar= document.getElementsByClassName('navbar-light')[0];
let body= document.getElementsByTagName('body')[0];
let dropdowntoggleA= document.getElementsByClassName('dropdown-toggle')[0];
let titleHi= document.getElementsByClassName('title-hi')[0];

let theme = localStorage.getItem("mode");
    if (theme == "dark") {
        switchDay();
    }


divOn.addEventListener('click', switchDay);

function switchDay () {
    divOn.style.animation= "switchday 1s linear 1";
    divOn.style.visibility= "hidden";
    divOff.style.visibility= "visible";
    modeSwitch.style.background= "#060930";
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-light');
    dropdowntoggleA.classList.add('text-light');
    dropdowntoggleA.classList.remove('text-dark');
    titleHi.style.color= "#f4abc4";
    body.classList.add('darkMode');
    localStorage.setItem('mode', 'dark');

    //HIDE THE CLOUDS
    for (let x= 0; x<cloudIcons.length; x++) {
        cloudIcons[x].style.display= "none"; 
    }
    //ADD THE STARS
    let txt= '<i class="stars fas fa-bahai"></i>' +
    '<i class="stars fas fa-bahai"></i>' + 
    '<i class="stars fas fa-bahai"></i>' +
    '<i class="stars fas fa-bahai"></i>'+ 
    '<i class="stars fas fa-bahai"></i>' + 
    '<i class="stars fas fa-bahai"></i>' +
    '<i class="stars fas fa-bahai"></i>';
    if(document.getElementsByClassName('stars').length == 0) {
        mainHeader.innerHTML += txt;    
    } else { 
        let stars= document.getElementsByClassName('stars');
        for (let x= 0; x<stars.length; x++) {
            stars[x].style.display= "inline-block"; 
        }
    }
}

divOff.addEventListener('click', switchNight);

function switchNight () {
    divOff.style.animation= "switchnight 1s linear 1";
    divOff.style.visibility= "hidden";
    divOn.style.visibility= "visible";
    divOn.style.opacity= 1;
    modeSwitch.style.background= "#97d0cb";
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    dropdowntoggleA.classList.add('text-dark');
    dropdowntoggleA.classList.remove('text-light');
    titleHi.style.color= "#e4b127"
    body.classList.remove('darkMode');
    localStorage.setItem('mode', 'light');

    //HIDE STARS
    if(document.getElementsByClassName('stars')) {
        let stars= document.getElementsByClassName('stars');
        for (let x= 0; x<stars.length; x++) {
            stars[x].style.display= "none"; 
        }
    } 

    //SHOW CLOUDS
    for (let x= 0; x<cloudIcons.length; x++) {
        cloudIcons[x].style.display= "inline-block"; 
    }
}