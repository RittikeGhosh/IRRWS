function execute() {
    setTimeout(function () { document.getElementById('load').style.visibility = "hidden";},500);
    setTimeout(land_slide , 550);
};
// for the nav in the low width device 
var nav2_stat = false;
document.querySelector('#menu').onclick = function () {
    nav2_display(1);
}
document.getElementsByClassName('main')[0].onclick = function(){
    nav2_display(0);
}
function nav2_display(num){
    var nav2 = document.querySelector('#nav2').style;
    if (nav2_stat == false && num != 0) {
        nav2.display = 'block';
        nav2.top = '3em';
    }
    else {
        nav2.display = 'none';
        nav2.top = '0em';
    }
    nav2_stat = !nav2_stat;
}

//scroll event for the main nav bar ...
window.onscroll = function () {
    var content_height = document.getElementById('land-corousel').offsetHeight;
    var about_height = document.getElementById('about').offsetHeight;
    var commitment_height = document.getElementById('commitment').offsetHeight;
    var achievement_height = document.getElementById('achievement').offsetHeight;

    if (document.body.scrollTop > (content_height + about_height + commitment_height + achievement_height) || document.documentElement.scrollTop > (content_height + about_height + commitment_height + achievement_height)) {
        navbar("#FBE51A", "#fff", "| Contact Us");
        nav_set(3);
    }
    else if (document.body.scrollTop > (content_height + about_height + commitment_height) || document.documentElement.scrollTop > (content_height + about_height + commitment_height)) {
        navbar("#07BE1F", "#fff", "| Achievements");
        nav_set(2);
    }
    else if (document.body.scrollTop > (content_height + about_height) || document.documentElement.scrollTop > (content_height + about_height)) {
        navbar("#DE1E1E", "#fff", "| Commitments");
        nav_set(1);
    }
    else if (document.body.scrollTop > content_height || document.documentElement.scrollTop > content_height) {
        navbar("#52A4DB", "#fff", "| About Us");
        nav_set(0);
    }
    else {
        navbar('', "rgb(131, 147, 199)","| ");
        nav_set(4);
    }
}
function nav_set(num){
    for(i = 0 ; i<4 ;i++){
        if(i != num){
            document.querySelectorAll('#nav div')[i].style.left = "";
        }
        else{
            document.querySelectorAll('#nav div')[i].style.left = "50px";
        }
    }
}
function navbar(bgcolor,color,desc){
    document.getElementById("bar").style.backgroundColor = bgcolor
    document.querySelector('#bar #heading span').style.color = color;
    document.querySelector('#bar #heading #nav-location').innerHTML = desc;
}
//for ngo motot...

var moto_stat = [true, false, false];
function moto_display(num) {
    if (moto_stat[num] == true) {
        document.getElementsByClassName('moto-container')[num].style.height = "";
        document.getElementsByClassName('moto-head-accor')[num].style.transform = "rotateZ(0deg)";
    }
    else {
        document.getElementsByClassName('moto-container')[num].style.height = "100%";
        document.getElementsByClassName('moto-head-accor')[num].style.transform = "rotateZ(180deg)";
    }
    moto_stat[num] = !moto_stat[num];
}

// for the about menu ...

var about_navs = [document.querySelector('#about-nav1 span'), document.querySelector('#about-nav2 span'), document.querySelector('#about-nav3 span')];
var about_navs_bg = ["#DE1E1E", "#07BE1F", "#FBE51A"];
var about_contents = [document.getElementById('about-community'), document.getElementById('about-recognition'), document.getElementById('about-memories')];
var about_contents_stat = [false, true, true];
about_display(0);
function about_display(num) {
    if (about_contents_stat[num] == false) {
        reset(num);
        about_navs[num].style.backgroundColor = about_navs_bg[num];
        about_navs[num].style.color = "#fff";
        about_navs[num].style.fontWeight = "bold";
        about_contents[num].style.display = "block";
        about_contents_stat[num] = true;
    }
    else {
        reset(num);
    }
    function reset(num) {
        for (i = 0; i < 3; i++) {
            about_contents[i].style.display = "none";
            about_navs[i].style.backgroundColor = "";
            about_navs[i].style.color = "";
            about_navs[i].style.fontWeight = "";
            about_contents_stat[i] = false;
        }
    }
}

//for initial slide ... 

function land_slide() {
    var i = 0;
    document.getElementsByClassName('content')[0].style.top = '-20px';
    document.getElementsByClassName('content')[0].style.opacity = 1;
    setInterval(slide, 3000);
    function slide() {
        document.getElementsByClassName('land-carousel-img')[i].style.opacity = 0;
        if (++i < 4) {
            document.getElementsByClassName('land-carousel-img')[i].style.opacity = 1;
        }
        else {
            i = 0;
            document.getElementsByClassName('land-carousel-img')[i].style.opacity = 1;
        }
    }
}
// for ngo locotion 

function initMap() {
    var irrws = { lat: 26.254573, lng: 88.188800 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: irrws });
    var marker = new google.maps.Marker({ position: irrws, map: map });
}

// for image view...
var modal = document.getElementById('modal-img-show');
var img = document.querySelectorAll('#img-container img')[0];
var close = document.getElementById('close');
function image_display(e) {
    modal.style.width = "calc( 100% + 20px)";
    img.src = e.children[0].src;
}
window.onclick = function (e) {
    if (e.target == modal || e.target == close) {
        modal.style.width = "";
    }
}