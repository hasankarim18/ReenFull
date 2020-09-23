$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	autoplayTimeout:4000,
	
    responsiveClass:true,
	
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
	
})


$(document).ready(function(){
  $("#sreach_icon").click(function(){
    $(this).hide();
	 $("#search_box").show();
  });
  
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
