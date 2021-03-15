let color_boxes = document.querySelectorAll('.color-box');
let color_class_basename = 'color-box';
let color_class_active_name = 'color-box-active';

let green_default_set_color = ['green_default', '#18dc0c', '#11291b'];
let blue_nuka_cola = ['blue_nuka_cola', '#2eceff', '#11291b'];
let color_themes = [green_default_set_color, blue_nuka_cola];

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