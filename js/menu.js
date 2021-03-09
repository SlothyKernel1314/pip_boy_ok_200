var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
var special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');

var special_attribute_names = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];

var perk_attribute_names = ['p1', 'p2'];


function activeBox(box, attribute_names, box_class_basename, active_box_class) {
    for (var i=0 ; i < special_attribute_boxes.length ; i++) {
        special_attribute_boxes[i].classList.remove(active_box_class);
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + special_attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + special_attribute_names[i]).
            classList.add(active_box_class);
        }
    }
}


function changeDescription(box, attribute_names, box_class_basename,
    description_class_basename, active_description_class) {
    for (var i=0 ; i < special_attribute_descriptions.length ; i++) {
        special_attribute_descriptions[i].classList.remove(active_description_class);
    }

    for (var i=0 ; i < special_attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + special_attribute_names[i] + '') {
            document.getElementById(description_class_basename + '-' + special_attribute_names[i]).
            classList.add(active_description_class);
        }
    }
}


// processing execution when a mouseover is detected on a attribute box
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        // SPECIAL PAGE
        activeBox(this, special_attribute_names, 'special-attribute-box',
            'special-attribute-box-active');
        changeDescription(this, special_attribute_names, 'special-attribute-box',
            'special-attribute-description',
            'special-attribute-description-active');
    })
}