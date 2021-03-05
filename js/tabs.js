// inspiration for tab management : https://www.youtube.com/watch?v=wKatvNTAPVA

var stat_tabs_ids = ['stat-status-section', 'stat-special-section', 'stat-perks-section'];
var exp_tabs_ids = ['exp-jobs-section', 'exp-studies-section', 'exp-skills-section'];

var header_line_bottom_left = document.querySelector('.header-line-bottom-left');
var header_line_vertical_left = document.querySelector('.header-line-vertical-left');
var header_line_hook_left = document.querySelector('.header-line-hook-left');
var header_line_hook_right = document.querySelector('.header-line-hook-right');
var header_line_vertical_right = document.querySelector('.header-line-vertical-right');
var header_line_bottom_right = document.querySelector('.header-line-bottom-right');


var tabs = document.querySelectorAll('.tabs a');
// TODO : for tests purposes, remove in prod
var sections = document.querySelectorAll(".core-display");
// TODO : for tests purposes, remove in prod
var lis = document.querySelectorAll('li');
var current_active_section = document.querySelector('.core-display.core-display-active');

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

/* management of subtabs opacity */
function switchOpacitySubTabs(a) {
    var section = a.getAttribute('href').substring(1);
    var current_sub_tabs_active = document.querySelector('.sub-tabs-active');
    var tabs_a = current_sub_tabs_active.querySelectorAll('li > a');
    for (var i=0 ; i < tabs_a.length ; i++) {
        tabs_a[i].classList.remove('sub-header-active-tab',
            'sub-header-inactive-tab-near', 'sub-header-inactive-tab-far');
        switch (section) {
            case stat_tabs_ids[0]:
            case exp_tabs_ids[0]:
                tabs_a[0].classList.add('sub-header-active-tab');
                tabs_a[1].classList.add('sub-header-inactive-tab-near');
                tabs_a[2].classList.add('sub-header-inactive-tab-far');
                break;
            case stat_tabs_ids[1]:
            case exp_tabs_ids[1]:
                tabs_a[0].classList.add('sub-header-inactive-tab-near');
                tabs_a[1].classList.add('sub-header-active-tab');
                tabs_a[2].classList.add('sub-header-inactive-tab-near');
                break;
            case stat_tabs_ids[2]:
            case exp_tabs_ids[2]:
                tabs_a[0].classList.add('sub-header-inactive-tab-far');
                tabs_a[1].classList.add('sub-header-inactive-tab-near');
                tabs_a[2].classList.add('sub-header-active-tab');
                break;
        }
    }
}

function displayHeaderLines(a) {
    var section = a.getAttribute('href').substring(1);
    switch (section) {
        case stat_tabs_ids[0]:
        case stat_tabs_ids[1]:
        case stat_tabs_ids[2]:
            header_line_vertical_left.style.left = "-1rem";
            header_line_hook_left.style.marginLeft = "-1rem";
            header_line_vertical_right.style.left = "5.58rem";
            header_line_hook_right.style.marginLeft = "5.1rem";
            header_line_bottom_right.style.marginLeft = "5.6rem";
            header_line_bottom_right.style.width = "37.5rem";
            header_line_bottom_left.style.width = "4.7rem";
            break;
        case exp_tabs_ids[0]:
        case exp_tabs_ids[1]:
        case exp_tabs_ids[2]:
            header_line_vertical_left.style.left = "7.50rem";
            header_line_hook_left.style.marginLeft = "7.50rem";
            header_line_vertical_right.style.left = "13.00rem";
            header_line_hook_right.style.marginLeft = "12.52rem";
            header_line_bottom_right.style.marginLeft = "13rem";
            header_line_bottom_right.style.width = "30.1rem";
            header_line_bottom_left.style.width = "13.3rem";
            break;
    }
}


// execution of navigation tabs
for (var i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        displayTabs(this);
        switchSubTabs();
        switchOpacitySubTabs(this);
        displayHeaderLines(this);
    })
}

// in case of page refresh (we want to keep the current display !)
var hash = window.location.hash;
var a = document.querySelector('a[href="' + hash + '"]')
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a);
    switchSubTabs();
    switchOpacitySubTabs(a);
    displayHeaderLines(a);
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

