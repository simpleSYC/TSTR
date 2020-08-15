function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
//var btnContainer = document.getElementById("myBtnContainer");
var btns = document.getElementsByClassName("BTN*akcija");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}







///////////

var INFO_angebote=document.getElementsByClassName("info")[0];
var INFO_info=document.getElementsByClassName("info")[1];
function shIFO(a){if(a==true){
INFO_angebote.style="display:block;";
INFO_info.style="display:block;";}else{
INFO_angebote.style="display:none;";
INFO_info.style="display:none;";}}


shIFO(true);


////////////////////////////

function ceni(a){
b=a.parentElement.children[0].children[1];
	cnacng(b);
//	a.parentElement.children[3].innerHTML="5345345";
//	a.parentElement.children[4].value="5345345";
	}
////////////////////////////


var QQQ=document.getElementsByTagName("aside")[0];var qqq=document.getElementById("qqQQ");

function openModal() { 
if(document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].classList.contains("disabled")==false){OPMD();
  
sminka(true);
document.getElementById("contact").style.display = "block";var CLN=QQQ.cloneNode(true);qqQQ.appendChild(CLN);

qqQQ.children[0].children[2].children[3].children[0].children[0].children[0].innerHTML=pre1;
qqQQ.children[0].children[2].children[3].children[1].remove();
qqQQ.children[0].children[1].style="display:none;";


document.getElementsByClassName("*PYP")[0].style="display:none;";
document.getElementsByClassName("*PYP")[1].style="display:none;";


}}
function closeModal() { sminka(false);
document.getElementById("contact").style.display = "none";

document.getElementsByTagName("aside")[1].remove();

document.getElementsByClassName("*PYP")[0].style="display:block;";}

function sminka(a){
var NBR=document.getElementsByClassName("sc-cart-item-qty");
var XX=document.getElementsByClassName("sc-cart-remove");
if(a==true){
for(i=0;i<XX.length;i++){XX[i].style="display:none;";}
for(i=0;i<NBR.length;i++){NBR[i].type="text";NBR[i].disabled=true;}
}else{
for(i=0;i<XX.length;i++){XX[i].style="display:block;";}
for(i=0;i<NBR.length;i++){NBR[i].type="number";NBR[i].disabled=false;}}}

