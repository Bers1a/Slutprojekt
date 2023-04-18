let slideIndex = 1;
showSlides(slideIndex);

// nästa/ föregånde kontroll
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// bild kontroll
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex - 1]);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
