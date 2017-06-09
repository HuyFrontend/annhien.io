var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex = parseInt(slideIndex);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('item');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  var activeSlide = slideIndex-1;
  slides[activeSlide].querySelector('.slide-caption').innerHTML = 'Caption ' + slideIndex;
  slides[activeSlide].querySelector('.numbertext').innerHTML = slideIndex + '/' + slides.length;
}

function initEvents () {
  var dots = document.getElementsByClassName('dot-item');
  for (var i = 0, len = dots.length; i < len; i++) {
    dots[i].addEventListener('click', function () {
      var targetNo = this.getAttribute('data-target');
      currentSlide(targetNo);
    });
  }
  document.querySelector('.prev').addEventListener('click', function (event) {
    event.preventDefault();
    plusSlides(-1);

  });
  document.querySelector('.next').addEventListener('click', function (event) {
    event.preventDefault();
    plusSlides(1);

  });
}
initEvents();
