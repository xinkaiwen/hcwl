$(function(){
//	
	  $('header .u0>li').click(function(){
  	$("header .u0_1").toggle()
  })
  $('header .dh').click(function(){
  	$('header .sjd .left').toggle()
  })
//
	$('.section0 .bottom a').each(function(i){
		$(this).mouseover(function(){
			// $('.section0 .bottom a:eq('+i+')').css({position:'relative',top:'-15px',height:'80px'})
			$('.section0 .bottom li:eq('+i+')').css({'padding-bottom':'0px'});
			$('.section0 .bottom a:eq('+i+')').addClass('active0');


		})
		$(this).mouseout(function(){
			$('.section0 .bottom a:eq('+i+')').removeClass('active0')

		})
	})
//

 $('.cebian_dh .qq').hover(function(){

  $('.cebian_dh .yc1').animate({'width':'200px',right:'50px'})
 }, function(){
    $('.cebian_dh .yc1').animate({'width':'0px',right:'-50px'})
}) 

  $('.cebian_dh .dianhua').hover(function(){

  $('.cebian_dh .yc2').animate({'width':'250px',right:'50px'})
 }, function(){
    $('.cebian_dh .yc2').animate({'width':'0px',right:'-50px'})
})


  $('.cebian_dh .shouji').hover(function(){

  $('.cebian_dh .yc3').animate({'width':'250px',right:'50px'})
 }, function(){
    $('.cebian_dh .yc3').animate({'width':'0px',right:'-50px'})
})

  
})