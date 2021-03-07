var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
var special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');


function changeSpecialDescription(box) {
    for (var i=0 ; i < special_attribute_descriptions.length ; i++) {
        special_attribute_descriptions[i].classList.remove('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-strength')) {
        document.getElementById('special-attribute-description-strength').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-perception')) {
        document.getElementById('special-attribute-description-perception').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-endurance')) {
        document.getElementById('special-attribute-description-endurance').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-charisma')) {
        document.getElementById('special-attribute-description-charisma').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-intelligence')) {
        document.getElementById('special-attribute-description-intelligence').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-agility')) {
        document.getElementById('special-attribute-description-agility').
        classList.add('special-attribute-description-active');
    }
    if(box.classList.contains('special-attribute-box-luck')) {
        document.getElementById('special-attribute-description-luck').
        classList.add('special-attribute-description-active');
    }
}


// processing execution when a mouseover is detected on a special attribute boc
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        changeSpecialDescription(this);
    })
}