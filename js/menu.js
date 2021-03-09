var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
var special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');
var perk_attribute_boxes = document.querySelectorAll('.perk-attribute-box');
var perk_attribute_descriptions = document.querySelectorAll('.perk-attribute-description');

var special_attribute_names = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];
var perk_attribute_names = ['p1', 'p2', 'p3'];


function activeMenu(box, boxes, descriptions, attribute_names, box_class_basename, description_class_basename,
                    active_box_class, active_description_class) {
    for (var i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (var i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }
    for (var i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i]).
            classList.add(active_box_class);
            document.getElementById(description_class_basename + '-' + attribute_names[i]).
            classList.add(active_description_class);
        }
    }
}


// processing execution when a mouseover is detected on a special attribute box
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this, special_attribute_boxes, special_attribute_descriptions, special_attribute_names,
            'special-attribute-box',
            'special-attribute-description',
            'special-attribute-box-active',
            'special-attribute-description-active')

    })
}


// processing execution when a mouseover is detected on a perk attribute box
for (var i=0 ; i < perk_attribute_boxes.length ; i++) {
    perk_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this, perk_attribute_boxes, perk_attribute_descriptions, perk_attribute_names,
            'perk-attribute-box',
            'perk-attribute-description',
            'perk-attribute-box-active',
            'perk-attribute-description-active')
    })
}