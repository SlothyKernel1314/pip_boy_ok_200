let color_boxes = document.querySelectorAll('.color-box');
let color_class_basename = 'color-box';
let color_class_active_name = 'color-box-active';

let green_default = ['green_default', '#18dc0c', '#11291b'];
let blue_nuka_cola = ['blue_nuka_cola', '#2eceff', '#11291b'];
let orange_mojave = ['orange_mojave', '#ffb641', '#11291b'];
let purple = ['purple', '#8438f5', '#11291b'];
let red = ['red', '#bb313d', '#11291b'];
let green_mutant = ['green_mutant', '#1aff80', '#11291b'];
let color_themes = [green_default, blue_nuka_cola, orange_mojave, purple, red, green_mutant];

function activeColor(box, boxes, color_themes,
                     box_class_basename, active_box_class) {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < color_themes.length ; i++) {
        if(box.id === box_class_basename + '-' + color_themes[i][0] + '') {
            document.getElementById(box_class_basename + '-' + color_themes[i][0]).
            classList.add(active_box_class);
            document.documentElement.style.setProperty('--pip-boy-primary-color', color_themes[i][1]);
        }
    }
}


// processing execution when a mouseover is detected on a color box
for (let i=0 ; i < color_boxes.length ; i++) {
    color_boxes[i].addEventListener('click', function (evt) {
        activeColor(this, color_boxes, color_themes,
            color_class_basename, color_class_active_name)
    })
}