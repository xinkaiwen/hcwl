$(function(){

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

//section3
    var left0=$('.section3 li:eq(0)').width();
    $('.section3 .lunzhuan ul').css('left',-left0/2);
      var now=0;
     var timer=setInterval(function(){
     	now++;
     	if(now==5){now=0};
     // $('.section3 .lunzhaun ul img:eq('+now+')').css({transform: 'scale(0.5,0.5)'})
     $('.section3 .lunzhuan ul').animate({'left':-left0*now-left0/2},'slow');

     },2000)
    $('.section3 .lunzhuan .left').click(function(){
    	now--;
    	if(now==-1){
    		now=4
    	}
    $('.section3 .lunzhuan ul').animate({'left':-left0*now-left0/2},'slow');
    })
      $('.section3 .lunzhuan .right').click(function(){
    		now++;
    	if(now==5){
    		now=0
    	}
    $('.section3 .lunzhuan ul').animate({'left':-left0*now-left0/2},'slow');


    })
    
   
    // setInterval(function(){
    // 	now++;
    // 	$('.section3 .lunzhaun ul').css({left:-left0*now})
    // },2000)
    $('.section3 .lunzhuan li').each(function(i){
    	$(this).hover(function(){
    		clearInterval(timer);
    		$('.section3 .lunzhuan .content:eq('+i+')').slideDown()
    	},function(){
    		$('.section3 .lunzhuan .content:eq('+i+')').slideUp()

    	})
    })
})