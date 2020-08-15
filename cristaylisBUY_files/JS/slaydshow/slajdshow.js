var ALT=[           //    ovaj redosledno se gledat ovie => 123/456/789 za mali fotki
ID_1=["tekst001","dasd","dsa","ere"],
ID_2=["222","dasdq","vxcvx","ggds"],
ID_3=["","","",""],
ID_4=["","","",""],
ID_5=["","","",""],
ID_6=["","","",""],
ID_7=["","","",""],
ID_8=["","","",""],
ID_9=["","","",""],
ID_10=["","","",""],
ID_11=["","","",""],
ID_12=["","","",""],
ID_13=["","","",""],
ID_14=["","","",""],
ID_15=["","","",""],
ID_16=["","","",""],
ID_17=["","","",""],
ID_18=["","","",""],
ID_19=["","","",""],
ID_20=["","","",""],
ID_21=["","","",""]]; var q;

function MESTI_FOTKITE(a){var o;if(a<9){if(o!="0"){o="0"}}else{if(o!=""){o=""}}
for(i=0;i<4;i++){// za kako setings da se zapazi dimenzite w /h od originalkite fotki
GOLEMI_fotki[i].src="cristaylisBUY_files/data/PRO_/ID_"+o+TR[a]+"/img"+(i+1)+".jpg";
MALI_fotki[i].src="cristaylisBUY_files/data/PRO_/ID_"+o+TR[a]+"/img"+(i+1)+".jpg";

MALI_fotki[i].alt=ALT[TR[a]-1][i];
}}

function kliknato(a){
q=parseInt(a.parentElement.parentElement.id);/// q 0-18 ok ee
MESTI_FOTKITE(q);

SHOWmodalinfo(true);}


var Gf_1=document.getElementById("Simg_1");///ovie se na 1ot modelski golemoto
var Gf_2=document.getElementById("Simg_2");
var Gf_3=document.getElementById("Simg_3");
var Gf_4=document.getElementById("Simg_4");
var GOLEMI_fotki=[Gf_1,Gf_2,Gf_3,Gf_4];

var Mf_1=document.getElementById("Dimg_1");///ovie se na 1ot modelski golemoto
var Mf_2=document.getElementById("Dimg_2");
var Mf_3=document.getElementById("Dimg_3");
var Mf_4=document.getElementById("Dimg_4");
var MALI_fotki=[Mf_1,Mf_2,Mf_3,Mf_4];

var modalINFO=document.getElementById("myModalINFO");
function SHOWmodalinfo(a){if(a){modalINFO.style="display:block;"
slideIndex = 1;showSlides(slideIndex);
}else{modalINFO.style="display:none;"}}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionSS");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
	
	