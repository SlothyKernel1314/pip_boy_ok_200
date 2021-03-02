// TODO : structure
// -- STAT
// ----- STATUS
// ----- SPECIAL
// ----- PERKS
// -- EXP
// ----- (expériences prof.)
// ----- (études)
// ----- (compétences)
// -- ??? (objectifs)
// -- MAP : coordonnées
// -- COLOR : changer la couleur du pip boy

// TODO : responsive
// -- détecter les formats tablettes + forcer le mode paysage
// -- réduction du font.size adaptée aux différents formats d'écran

// TODO : favicon

// TODO : hebergement

var tabs = document.querySelectorAll('.tabs a')
var sections = document.querySelectorAll(".core-display")
var current_active_section = document.querySelector('.core-display.core-display-active')

for (var i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        var li = this.parentNode
        var div = this.parentNode.parentNode.parentNode
        var anchor = this.getAttribute('href')
        // in case where we click on the tab that is already active
        if (li.classList.contains('active')) {
            return false
        }
        // remove .tab-active class from the previous active tab
        div.querySelector('.tabs .tab-active').classList.remove('tab-active')
        // add .tab-active class from the current active tab
        li.classList.add('tab-active')
        // remove .core-display-active class from the current active section
        current_active_section.classList.remove('core-display-active')
        // add .core-display-active class on the new active section
        document.getElementById(anchor.substring(1)).classList.add('core-display-active')

    })
}

