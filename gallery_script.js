
var currentBoxNum = 1;

//Byter ut innehållet till information om projektet Chas Academy
function chas() {
    document.getElementById('wideversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn').href = "work.html#2"
    document.getElementById('wide_paragraph').innerHTML = "We were given a task to develop a prototype for a website.<br><br> We chose to redesign our school's website (Chas Academy AB). We focused on the desktop version but we also...";
}

//Byter ut innehållet till information om projektet Figma
function figma() {
    document.getElementById('wideversion_big_gallery_image').src = "images/sjostaden_banner2.png";
    document.getElementById('gallery_title').innerHTML = "Redesign of Sjöstaden Skybar";
    document.getElementById('readmore_btn').href = "work.html#8"
    document.getElementById('wide_paragraph').innerHTML = "In this project I redesigned the website of one of the highest located restaurants in Stockholm, Sjöstaden Skybar. <br><br> I have recorded my presentation for the company where I pitch my suggestions for improvements.";
}

//Byter ut innehållet till information om projektet WJC 2024
function hockey() {
    document.getElementById('wideversion_big_gallery_image').src = "images/hockey_image.png";
    document.getElementById('gallery_title').innerHTML = "World Junior Championship 2024";
    document.getElementById('readmore_btn').href = "work.html#9"
    document.getElementById('wide_paragraph').innerHTML = "In progress. Coming soon!<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br> Ut enim ad minim veniam, quis nostrud exercitation.";
}

//Byter ut innehållet till information om projektet Chas Academy för liten skärm
function chas2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/chasacademy.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Chas Academy";
    document.getElementById('readmore_btn_small').href = "work.html#2"
    document.getElementById('small_paragraph').innerHTML = "We were given a task to develop a prototype for a website. We chose to redesign our school's website (Chas Academy AB). We focused on the desktop version but we also made 3 detailed wireframes for mobile.";
}

//Byter ut innehållet till information om projektet Figma för liten skärm
function figma2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/sjostaden_banner2.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "Redesign of Sjöstaden Skybar";
    document.getElementById('readmore_btn_small').href = "work.html#8"
    document.getElementById('small_paragraph').innerHTML = "In this project I redesigned the website of one of the highest located restaurants in Stockholm, Sjöstaden Skybar. I have recorded my presentation for the company where I pitch my suggestions for improvements.";
}

//Byter ut innehållet till information om projektet WJC 2024 för liten skärm
function hockey2() {
    document.getElementById('smallversion_big_gallery_image').src = "images/hockey_image.png";
    document.getElementById('gallery_title_smallversion').innerHTML = "World Junior Championship 2024";
    document.getElementById('readmore_btn_small').href = "work.html#9"
    document.getElementById('small_paragraph').innerHTML = "In progress. Coming soon!";
}


//Sätter en röd ram runt den markerade bilden
function changeColor(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#17202D";
    currentBoxNum = boxNum;
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("wideversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("wideversion_gallery_box1").addEventListener("click", function () { changeColor(1); });
document.getElementById("wideversion_gallery_box2").addEventListener("click", function () { changeColor(2); });
document.getElementById("wideversion_gallery_box3").addEventListener("click", function () { changeColor(3); });



//Sätter en röd ram runt den markerade bilden för liten skärm
function changeColor2(boxNum) {
    console.log(currentBoxNum);
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#17202D";
    currentBoxNum = boxNum;
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderStyle = "solid";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderWidth = "4px";
    document.getElementById("smallversion_gallery_box" + currentBoxNum).style.borderColor = "#F2478D";
}

document.getElementById("smallversion_gallery_box1").addEventListener("click", function () { changeColor2(1); });
document.getElementById("smallversion_gallery_box2").addEventListener("click", function () { changeColor2(2); });
document.getElementById("smallversion_gallery_box3").addEventListener("click", function () { changeColor2(3); });
