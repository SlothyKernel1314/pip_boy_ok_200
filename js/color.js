let color_boxes = document.querySelectorAll('.color-box');
let color_class_basename = 'color-box';
let color_class_active_name = 'color-box-active';
let color_names = ['green_default', 'blue_nuka_cola', 'color_3', 'color_4', 'color_5', 'color_6', 'color_7', 'color_8',
    'color_9', 'color_10', 'color_11', 'color_12'];

let green_default_set_color = ['green_default', '#18dc0c', '#11291b']
let green_default_blue_nuka_cola = ['blue_nuka_cola', '#18dc0c', '#11291b']
let colors_hex_values = [green_default_set_color]

function activeColor(box, boxes, attribute_names,
                     box_class_basename, active_box_class) {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i]).
            classList.add(active_box_class);
            document.documentElement.style.setProperty('--pip-boy-primary-color', '#2eceff');
        }
    }
}


// processing execution when a mouseover is detected on a color box
for (let i=0 ; i < color_boxes.length ; i++) {
    color_boxes[i].addEventListener('click', function (evt) {
        activeColor(this, color_boxes, color_names,
            color_class_basename, color_class_active_name)

    })
}