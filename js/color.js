let info_images = document.querySelectorAll('.info-icon > img')
let color_boxes = document.querySelectorAll('.color-box');
let color_class_basename = 'color-box';
let color_class_active_name = 'color-box-active';

/**
 *
 * @var 1: color name
 * @var 2: --pip-boy-primary-color
 * @var 3: --pip-boy-secondary-color
 * @var 4: CCS filter property
 */
let green_default = ['green_default', '#18dc0c', '#11291b'];
let blue_nuka_cola = ['blue_nuka_cola', '#2eceff', '#002733',
                        'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(500deg) saturate(1000%) contrast(0.8)'];
let orange_mojave = ['orange_mojave', '#ffb641', '#1a1000',
                        'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)'];
let purple = ['purple', '#8438f5', '#150330',
                        'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(200deg) saturate(1000%) contrast(0.8)'];
let red = ['red', '#bb313d', '#280b0d',
                        'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(310deg) saturate(1000%) contrast(0.8)'];
let green_mutant = ['green_mutant', '#1aff80', '#003317',
                        'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(470deg) saturate(1000%) contrast(0.8)'];
let pink_boy = ['pink_boy', '#ff00ff', '#330033',
                        'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(220deg) saturate(1000%) contrast(0.8)'];
let night_blue = ['night_blue', '#0897ff', '#001e33',
                        'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(180deg) saturate(1000%) contrast(0.8)'];
let ice = ['ice', '#dce0e1', '#171b1c',
                        'grayscale(100%) brightness(100%) sepia(0%) hue-rotate(100deg) saturate(10%) contrast(0.9)'];
let gold = ['gold', '#ffd700', '#332b00',
                        'grayscale(100%) brightness(90%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)'];


let color_themes = [green_default, blue_nuka_cola, orange_mojave, purple, red,
    green_mutant, pink_boy, night_blue, ice, gold];


function activeColor(box, boxes, color_themes,
                     box_class_basename, active_box_class,
                     info_images) {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < color_themes.length ; i++) {
        if(box.id === box_class_basename + '-' + color_themes[i][0] + '') {
            document.getElementById(box_class_basename + '-' + color_themes[i][0]).
            classList.add(active_box_class);
            // setting text colors
            document.documentElement.style.setProperty('--pip-boy-primary-color', color_themes[i][1]);
            document.documentElement.style.setProperty('--pip-boy-secondary-color', color_themes[i][2]);
            // setting image colors with filter CSS property
            if(box.id !== 'color-box-green_default') {
                for (let j=0 ; j < info_images.length ; j++) {
                    info_images[j].style.removeProperty('filter');
                    info_images[j].style.setProperty('filter', color_themes[i][3]);
                }
            } else {
                for (let j=0 ; j < info_images.length ; j++) {
                    info_images[j].style.removeProperty('filter');
                }
            }
        }
    }
}


// processing execution when a mouseover is detected on a color box
for (let i=0 ; i < color_boxes.length ; i++) {
    color_boxes[i].addEventListener('click', function (evt) {
        activeColor(this, color_boxes, color_themes,
            color_class_basename, color_class_active_name,
            info_images)
    })
}