const stat_tabs_ids = ['stat-status-section', 'stat-special-section', 'stat-perk-section'];
const exp_tabs_ids = ['exp-jobs-section', 'exp-studies-section', 'exp-skills-section'];
const data_tab_id = 'data-section';
const map_tab_id = 'map-section';
const color_tab_id = 'color-section';

const header_line_before = document.getElementById('header-line-before');
const header_line_after = document.getElementById('header-line-after');

const tabs = document.querySelectorAll('.tabs a');
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


/* management of header lines display */
function displayHeaderLines(a) {
    let section = a.getAttribute('href').substring(1);
    switch (section) {
        case stat_tabs_ids[0]:
        case stat_tabs_ids[1]:
        case stat_tabs_ids[2]:
            header_line_before.style.left = '-51.5rem';
            header_line_after.style.left = '5rem';
            break;
        case exp_tabs_ids[0]:
        case exp_tabs_ids[1]:
        case exp_tabs_ids[2]:
            header_line_before.style.left = '-43rem';
            header_line_after.style.left = '12.5rem';
            break;
        case data_tab_id:
            header_line_before.style.left = '-35.5rem';
            header_line_after.style.left = '21rem';
            break;
        case map_tab_id:
            header_line_before.style.left = '-27rem';
            header_line_after.style.left = '28.5rem';
            break;
        case color_tab_id:
            header_line_before.style.left = '-19.5rem';
            header_line_after.style.left = '38.0rem';
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
const hash = window.location.hash;
const a = document.querySelector('a[href="' + hash + '"]')
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a);
    switchSubTabs();
    switchOpacitySubTabs(a);
    displayHeaderLines(a);
}

