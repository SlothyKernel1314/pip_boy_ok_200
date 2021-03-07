var special_attribute_boxes = document.querySelectorAll('.special-attribute-box');

function changeSpecialDescription() {
    alert("toto");
}

// processing execution when a mouseover is detected on a special attribute boc
for (var i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        changeSpecialDescription();
    })
}