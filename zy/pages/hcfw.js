$(function(){

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


		  $('header .u0>li').click(function(){
  	$("header .u0_1").toggle()
  })
  $('header .dh').click(function(){
  	$('header .sjd .left').toggle()
  })
})