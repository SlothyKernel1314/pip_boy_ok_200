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

for (var i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        var li = this.parentNode
        var div = this.parentNode.parentNode.parentNode
        if (li.classList.contains('active')) {
            return false
        }
        div.querySelector('.tabs .tab-active').classList.remove('tab-active')
        li.classList.add('tab-active')

    })
}

