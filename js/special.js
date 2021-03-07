var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
var special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');

var special_attribute_names = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];


function activeAttributeBox(box) {
    for (var i=0 ; i < special_attribute_boxes.length ; i++) {
        special_attribute_boxes[i].classList.remove('special-attribute-box-active');
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === 'special-attribute-box-' + special_attribute_names[i] + '') {
            document.getElementById('special-attribute-box-' + special_attribute_names[i]).
            classList.add('special-attribute-box-active');
        }
    }
}


function changeSpecialDescription(box) {
    for (var i=0 ; i < special_attribute_descriptions.length ; i++) {
        special_attribute_descriptions[i].classList.remove('special-attribute-description-active');
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === 'special-attribute-box-' + special_attribute_names[i] + '') {
            document.getElementById('special-attribute-description-' + special_attribute_names[i]).
            classList.add('special-attribute-description-active');
        }
    }
}


// processing execution when a mouseover is detected on a special attribute box
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        changeSpecialDescription(this);
        activeAttributeBox(this);
    })
}