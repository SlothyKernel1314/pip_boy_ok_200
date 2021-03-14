let special_attribute_boxes = document.querySelectorAll('.special-attribute-box');
let special_attribute_descriptions = document.querySelectorAll('.special-attribute-description');
let special_attribute_images = document.querySelectorAll('.special-attribute-image');
let special_attribute_class_basenames = ['special-attribute-box',
    'special-attribute-description', 'special-attribute-image'];
let special_attribute_class_active_names = ['special-attribute-box-active',
    'special-attribute-description-active', 'special-attribute-image-active'];
let special_attribute_names = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];

let perk_attribute_boxes = document.querySelectorAll('.perk-attribute-box');
let perk_attribute_descriptions = document.querySelectorAll('.perk-attribute-description');
let perk_attribute_images = document.querySelectorAll('.perk-attribute-image');
let perk_attribute_class_basenames = ['perk-attribute-box',
    'perk-attribute-description', 'perk-attribute-image'];
let perk_attribute_class_active_names = ['perk-attribute-box-active',
    'perk-attribute-description-active', 'perk-attribute-image-active'];
let perk_attribute_names = ['chemist', 'cannibal', 'fortune_finder', 'idiot_savant', 'nerd_rage', 'heavy-gunner'];

let job_attribute_boxes = document.querySelectorAll('.job-attribute-box');
let job_attribute_descriptions = document.querySelectorAll('.job-attribute-description');
// let job_attribute_images = document.querySelectorAll('.job-attribute-image');
// let job_attribute_class_basenames = ['job-attribute-box',
//     'job-attribute-description', 'job-attribute-image'];
let job_attribute_class_basenames = ['job-attribute-box',
    'job-attribute-description'];
// let job_attribute_class_active_names = ['job-attribute-box-active',
//     'job-attribute-description-active', 'job-attribute-image-active'];
let job_attribute_class_active_names = ['job-attribute-box-active',
    'job-attribute-description-active'];
let job_attribute_names = ['job_1', 'job_2', 'job_3', 'job_4'];


function activeMenuWithImages(box,
                    boxes, descriptions, images,
                    attribute_names,
                    box_class_basename, description_class_basename, image_class_basename,
                    active_box_class, active_description_class, active_image_class) {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }
    for (let i=0 ; i < images.length ; i++) {
        images[i].classList.remove(active_image_class);
    }
    for (let i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i]).
            classList.add(active_box_class);
            document.getElementById(description_class_basename + '-' + attribute_names[i]).
            classList.add(active_description_class);
            document.getElementById(image_class_basename + '-' + attribute_names[i]).
            classList.add(active_image_class);
        }
    }
}


function activeMenu(box,
                    boxes, descriptions,
                    attribute_names,
                    box_class_basename, description_class_basename,
                    active_box_class, active_description_class) {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }
    for (let i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i]).
            classList.add(active_box_class);
            document.getElementById(description_class_basename + '-' + attribute_names[i]).
            classList.add(active_description_class);
        }
    }
}


// processing execution when a mouseover is detected on a special attribute box
for (let i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenuWithImages(this,
            special_attribute_boxes,
            special_attribute_descriptions,
            special_attribute_images,
            special_attribute_names,
            special_attribute_class_basenames[0],
            special_attribute_class_basenames[1],
            special_attribute_class_basenames[2],
            special_attribute_class_active_names[0],
            special_attribute_class_active_names[1],
            special_attribute_class_active_names[2])

    })
}


// processing execution when a mouseover is detected on a perk attribute box
for (let i=0 ; i < perk_attribute_boxes.length ; i++) {
    perk_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenuWithImages(this,
            perk_attribute_boxes,
            perk_attribute_descriptions,
            perk_attribute_images,
            perk_attribute_names,
            perk_attribute_class_basenames[0],
            perk_attribute_class_basenames[1],
            perk_attribute_class_basenames[2],
            perk_attribute_class_active_names[0],
            perk_attribute_class_active_names[1],
            perk_attribute_class_active_names[2])
    })
}


// processing execution when a mouseover is detected on a job attribute box
for (let i=0 ; i < job_attribute_boxes.length ; i++) {
    job_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this,
            job_attribute_boxes,
            job_attribute_descriptions,
            job_attribute_names,
            job_attribute_class_basenames[0],
            job_attribute_class_basenames[1],
            job_attribute_class_active_names[0],
            job_attribute_class_active_names[1])
    })
}