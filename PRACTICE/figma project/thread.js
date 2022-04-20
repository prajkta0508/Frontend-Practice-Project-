var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
showSlides(slideIndex += n);

}

function currentSlide(n) {
showSlides(slideIndex = n);

}

function showSlides(n) {
var i;
var slideitem = document.getElementsByClassName("slideitem");
var sliderdot  = document.getElementsByClassName("slider-dot");
if (n > slideitem.length )  {slideIndex = 1}
if (n < 1)  {salideIndex = slideitem.length}
for (i = 0; i < slideitem.length; i++) {
    slideitem [i].style.display = "none" ;
}
for (i = 0; i <  sliderdot.length; i++){

    sliderdot [i].className = sliderdot[i].className.replace("active", "");
}
slideitem[slideIndex-1].style.display = "block";
sliderdot[slideIndex-1].className += "active";



}

