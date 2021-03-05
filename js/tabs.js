// inspiration for tab management : https://www.youtube.com/watch?v=wKatvNTAPVA

var tabs = document.querySelectorAll('.tabs a');
// TODO : for tests purposes, remove in prod
var sections = document.querySelectorAll(".core-display");
// TODO : for tests purposes, remove in prod
var lis = document.querySelectorAll('li');
var current_active_section = document.querySelector('.core-display.core-display-active');
var stat_tabs_ids = ['stat-status-section', 'stat-special-section', 'stat-perks-section'];
var exp_tabs_ids = ['exp-jobs-section', 'exp-studies-section', 'exp-skills-section'];

/* management of tab navigation...
... and display of section contents*/
var displayTabs = function (a) {
    var li = a.parentNode;
    var anchor = a.getAttribute('href');
    // in case where we click on the tab that is already active
    if (li.classList.contains('active')) {
        return false;
    }
    // TABS
    // remove .tab-active class from the previous active tab
    document.querySelector('.tabs .tab-active').classList.remove('tab-active');
    // add .tab-active class from the current active tab
    li.classList.add('tab-active');
    // SECTIONS
    // remove .core-display-active class from the current active section
    current_active_section.classList.remove('core-display-active');
    // add .core-display-active class on the new active section
    document.getElementById(anchor.substring(1)).classList.add('core-display-active');
    // change current_active_session
    current_active_section = document.querySelector('.core-display.core-display-active');
}

/* management of subtabs switching */
function switchSubTabs() {
    if(stat_tabs_ids.includes(current_active_section.id)) {
        document.querySelector('.sub-tabs-active').classList.remove('sub-tabs-active');
        document.querySelector('.sub-header-stat').classList.add('sub-tabs-active');
    } else if(exp_tabs_ids.includes(current_active_section.id)) {
        document.querySelector('.sub-tabs-active').classList.remove('sub-tabs-active');
        document.querySelector('.sub-header-exp').classList.add('sub-tabs-active');
    } else {
        document.querySelector('.sub-tabs-active').classList.remove('sub-tabs-active');
        document.querySelector('.sub-header-void').classList.add('sub-tabs-active');
    }
}

function switchOpacitySubTabs(a) {
    var section = a.getAttribute('href').substring(1);
    var current_sub_tabs_active = document.querySelector('.sub-tabs-active');
    var tabs_a = current_sub_tabs_active.querySelectorAll('li > a');
    for (var i=0 ; i < tabs.length ; i++) {
        tabs_a[i].classList.remove('sub-header-active-tab',
            'sub-header-inactive-tab-near', 'sub-header-inactive-tab-far')
    }
    switch (section) {
        case stat_tabs_ids[0]:
        case exp_tabs_ids[0]:
            // alert(section.toString());
            break;
        case stat_tabs_ids[1]:
        case exp_tabs_ids[1]:
            // alert(section.toString());
            break;
        case stat_tabs_ids[2]:
        case exp_tabs_ids[2]:
            // alert(section.toString());
            break;
    }
}

// execution of navigation tabs
for (var i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        displayTabs(this);
        switchSubTabs();
        switchOpacitySubTabs(this)
    })
}

// in case of page refresh (we want to keep the current display !)
var hash = window.location.hash;
var a = document.querySelector('a[href="' + hash + '"]')
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a);
    switchSubTabs();
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

