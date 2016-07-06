$(function(){
	$('.nr li').each(function(i){
        $(this).hover(function(){
             $('.nr .img img:eq('+i+')').css({transform:'scale(1.3,1.3)'})
             $('.nr .flout:eq('+i+')').animate({bottom:'0px'},'slow') 
             $('.nr .content:eq('+i+')').animate({bottom:'-150px'})
        },function(){
             $('.nr .img img:eq('+i+')').css({transform:'scale(1,1)'})
             $('.nr .flout:eq('+i+')').animate({bottom:'-773px'})
             $('.nr .content:eq('+i+')').animate({bottom:'0px'})

        })
	})
	var nowpage=0;
	$('section .left').click(function(){
		clearInterval(timer)
		nowpage++
		if(nowpage==4){
     	nowpage=0
        }
		$('.nr ul').animate({left:-397*nowpage},'slow')
	})
		$('section .right').click(function(){
		clearInterval(timer)
		nowpage--
		if(nowpage==-1){
     	nowpage=3
        }
		$('.nr ul').animate({left:-397*nowpage},'slow')
	})
	var timer=setInterval(function(){
	clearInterval(timer)
     nowpage++;
     if(nowpage==4){
     	nowpage=0
     }
     $('.nr ul').animate({left:-397*nowpage},'slow')   
	},2000)
	setInterval(timer);
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