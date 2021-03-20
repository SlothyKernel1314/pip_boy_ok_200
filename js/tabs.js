// inspiration for tab management : https://www.youtube.com/watch?v=wKatvNTAPVA

let stat_tabs_ids = ['stat-status-section', 'stat-special-section', 'stat-perk-section'];
let exp_tabs_ids = ['exp-jobs-section', 'exp-studies-section', 'exp-skills-section'];
let data_tab_id = 'data-section';
let map_tab_id = 'map-section';
let color_tab_id = 'color-section';

let header_line_bottom_left = document.querySelector('.header-line-bottom-left');
let header_line_vertical_left = document.querySelector('.header-line-vertical-left');
let header_line_hook_left = document.querySelector('.header-line-hook-left');
let header_line_hook_right = document.querySelector('.header-line-hook-right');
let header_line_vertical_right = document.querySelector('.header-line-vertical-right');
let header_line_bottom_right = document.querySelector('.header-line-bottom-right');

let tabs = document.querySelectorAll('.tabs a');
let current_active_section = document.querySelector('.core-display.core-display-active');

/* management of tab navigation...
... and display of section contents*/
let displayTabs = function (a) {
    let li = a.parentNode;
    let anchor = a.getAttribute('href');
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
    let section = a.getAttribute('href').substring(1);
    let current_sub_tabs_active = document.querySelector('.sub-tabs-active');
    let tabs_a = current_sub_tabs_active.querySelectorAll('li > a');
    for (let i=0 ; i < tabs_a.length ; i++) {
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


/* css positioner for header lines / displayHeaderLines() refactoring */
function positioner(pos1, pos2, pos3, pos4, pos5, pos6, pos7) {
    header_line_vertical_left.style.left = pos1;
    header_line_hook_left.style.marginLeft = pos2;
    header_line_vertical_right.style.left = pos3;
    header_line_hook_right.style.marginLeft = pos4;
    header_line_bottom_right.style.marginLeft = pos5;
    header_line_bottom_right.style.width = pos6;
    header_line_bottom_left.style.width = pos7;
}


/* management of header lines display */
function displayHeaderLines(a) {
    let section = a.getAttribute('href').substring(1);
    switch (section) {
        case stat_tabs_ids[0]:
        case stat_tabs_ids[1]:
        case stat_tabs_ids[2]:
            positioner('-1rem', '-1rem','5.58rem', '5.1rem',
                '5.6rem', '37.5rem', '4.7rem')
            break;
        case exp_tabs_ids[0]:
        case exp_tabs_ids[1]:
        case exp_tabs_ids[2]:
            positioner('7.50rem', '7.50rem','13.00rem', '12.52rem',
                '13rem', '30.1rem', '13.3rem')
            break;
        case data_tab_id:
            positioner('15rem', '15rem','21.7rem', '21.22rem',
                '21.8rem', '21.3rem', '20.8rem')
            break;
        case map_tab_id:
            positioner('23.5rem', '23.5rem','29rem', '28.52rem',
                '29.1rem', '14.1rem', '29.3rem')
            break;
        case color_tab_id:
            positioner('30.9rem', '30.9rem','38.8rem', '38.32rem',
                '38.9rem', '4.1rem', '36.7rem')
            break;
    }
}


// execution of navigation tabs
for (let i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        displayTabs(this);
        switchSubTabs();
        switchOpacitySubTabs(this);
        displayHeaderLines(this);
    })
}


// in case of page refresh (we want to keep the current display !)
let hash = window.location.hash;
let a = document.querySelector('a[href="' + hash + '"]')
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a);
    switchSubTabs();
    switchOpacitySubTabs(a);
    displayHeaderLines(a);
}

// TODO : responsive
// -- détecter les formats tablettes + forcer le mode paysage
// -- réduction du font.size adaptée aux différents formats d'écran

// TODO : retirer les classes inutiles

// TODO : read me

// TODO : animations

// TODO : renommer Pip-Boy OK-200

// TODO : remove warnings

// TODO : hebergement

