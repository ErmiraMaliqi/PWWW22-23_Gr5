let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

$('.showcase .buttons').click(function(){
  $(this).addClass('button-active').siblings().removeClass('button-active');

//   metoda attr() ne jquery perdoret per me kthy vleren e  atributet psh all, pizza etc
  let filter=$(this).attr('data-filter');
  if(filter=='all'){
      $('.work .image' ).show(400);

  }
//   hide-callback
  else{
    $('.work .image' ).not('.'+filter).hide(200);
    $('.work .image' ).filter('.'+filter).show(400);
  }
});