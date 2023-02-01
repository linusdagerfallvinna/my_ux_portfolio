
var currentBoxNum = 1;

function chas() {
    document.getElementById('wideversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn').href = "caseStudy1.html"
}

function hockey() {
    document.getElementById('wideversion_big_gallery_image').src = "images/hockey_image.png";
    document.getElementById('gallery_title').innerHTML = "World Junior Championship 2024";
    document.getElementById('readmore_btn').href = "caseStudy2.html"
}

function figma() {
    document.getElementById('wideversion_big_gallery_image').src = "images/figma_image.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Figma";
    document.getElementById('readmore_btn').href = "caseStudy3.html"
}


function chas2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn_small').href = "caseStudy1.html"
}

function hockey2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/hockey_image.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "World Junior Championship 2024";
    document.getElementById('readmore_btn_small').href = "caseStudy2.html"
}

function figma2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/figma_image.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Figma";
    document.getElementById('readmore_btn_small').href = "caseStudy3.html"
}

function changeColor(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#FFFF";
    currentBoxNum = boxNum;
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("wideversion_gallery_box1").addEventListener("click", function () { changeColor(1); });
document.getElementById("wideversion_gallery_box2").addEventListener("click", function () { changeColor(2); });
document.getElementById("wideversion_gallery_box3").addEventListener("click", function () { changeColor(3); });




function changeColor2(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#FFFF";
    currentBoxNum = boxNum;
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("smallversion_gallery_box1").addEventListener("click", function () { changeColor2(1); });
document.getElementById("smallversion_gallery_box2").addEventListener("click", function () { changeColor2(2); });
document.getElementById("smallversion_gallery_box3").addEventListener("click", function () { changeColor2(3); });
