$(document).ready(function(){

	/*BURGER ANIMATE*/
$('.burg').on('click', function() {
	$('.bar').toggleClass('animate');
});

/*SLIDE TO SECTION*/
$('a').click(function(){
  $('body').animate( {
    scrollTop: $( $(this).attr('href') ).offset().top + 'px'
  }, 450)
})

/*TIMER TO NEXT LAUNCH, TO END OF THE MONTH ACTUALLY*/
function refreshDate(){
var date = new Date(),
		d = date.getDate(),
		h = date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds();
		renderTimer(d,h,m,s);
}

function renderTimer(d,h,m,s){
	$('#days').html(((30-d)<10?'0':'')+(30-d));;
	$('#hour').html(((24-h)<10?'0':'')+(24-h));;
	$('#minute').html(((60-m)<10?'0':'')+(60-m));;
	$('#sec').html(((60-s)<10?'0':'')+(60-s));
}

setInterval(function(){refreshDate()}, 1000);

/*SCROLL TO TOP BUTTON*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
		$('.scrollToTop').fadeIn();
	} else {
	  $('.scrollToTop').fadeOut();
	}
});

$('.scrollToTop').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 500);
});

/*UNLOCK FORM SEND*/
$('.form_area').keyup(function(){
		if($('#name').val() && $('#email').val() && $('#message').val()){
			$('#submit').removeClass("disactiveted");
		}
		else{
			$('#submit').addClass("disactiveted");
		}
});

});
