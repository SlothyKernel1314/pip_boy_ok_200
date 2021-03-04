// inspiration for tab management : https://www.youtube.com/watch?v=wKatvNTAPVA

var tabs = document.querySelectorAll('.tabs a')
// TODO : for tests purposes, remove in prod
var sections = document.querySelectorAll(".core-display")
// TODO : for tests purposes, remove in prod
var lis = document.querySelectorAll('li')
var current_active_section = document.querySelector('.core-display.core-display-active')

/* management of tab navigation...
... and display of section contents*/
var displayTabs = function (a) {
    var li = a.parentNode
    var anchor = a.getAttribute('href')
    // in case where we click on the tab that is already active
    if (li.classList.contains('active')) {
        return false
    }
    // remove .tab-active class from the previous active tab
    // div.querySelector('.tabs .tab-active').classList.remove('tab-active')
    document.querySelector('.tabs .tab-active').classList.remove('tab-active')
    // add .tab-active class from the current active tab
    li.classList.add('tab-active')
    // remove .core-display-active class from the current active section
    current_active_section.classList.remove('core-display-active')
    // add .core-display-active class on the new active section
    document.getElementById(anchor.substring(1)).classList.add('core-display-active')
    // change current_active_session
    current_active_section = document.querySelector('.core-display.core-display-active')
}


// execution of navigation tabs
for (var i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        displayTabs(this)
    })
}

// in case of page refresh (we want to keep the current display !)
var hash = window.location.hash
var a = document.querySelector('a[href="' + hash + '"]')
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a)
}

// TODO : structure
// -- STAT
// ----- STATUS
// ----- SPECIAL
// ----- PERKS
// -- EXP
// ----- JOBS
// ----- STUDIES
// ----- SKILLS
// -- DATA (objectifs)
// -- MAP : coordonnées
// -- COLOR : changer la couleur du pip boy

// TODO : responsive
// -- détecter les formats tablettes + forcer le mode paysage
// -- réduction du font.size adaptée aux différents formats d'écran

// TODO : favicon

// TODO : hebergement

