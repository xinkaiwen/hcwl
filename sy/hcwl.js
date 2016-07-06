$(function(){

  window.scrollReveal = new scrollReveal();
//头
  $('header .u0>li').click(function(){
  	$("header .u0_1").toggle()
  })
  $('header .dh').click(function(){
  	$('header .sjd .left').toggle()
  })

//内容0
    var nowpage=0
    var move=function(){
	nowpage++;
    if(nowpage==3){
   	nowpage=0
    }
    $('.neirong0 .tab span').css('background','none')
    $('.neirong0 .tab span:eq('+nowpage+')').css('background','white')
    $('.neirong0 img').hide();
    $('.neirong0 img:eq('+nowpage+')').show(); 
    }
	
	var timer=setInterval(move,2000)

    $('.neirong0 .tab span:first').css('background','white')
    $('.neirong0 .tab span').each(function(i){
	$(this).mouseover(function(){
		clearInterval(timer)
	    $('.neirong0 .tab span').css('background','none')
	    $(this).css('background','white')    		
        $('.neirong0 img').hide();
        $('.neirong0 img:eq('+i+')').show(); 
	})
	$(this).mouseout(function(){
	   $('.neirong0 img:eq('+i+')').show();
	   $(this).css('background','white');
       timer=setInterval(move,2000)
	})
    })
//内容1
$('.neirong1 .u1').css('position','relative');

var i=0
setInterval(function(){
   i++
   if(i%2==0){
      $('.neirong1 .u1').animate({left:'0'},1000)
   }else{
      $('.neirong1 .u1').animate({left:'-49%'},1000)
   }
},8000)
$('.neirong1 .u1 li').each(function(i){
  $(this).hover(function(){
    $('.neirong1 .u2:eq('+i+')').animate({'height':'298px'})
    $('.neirong1 .u0:eq('+i+')').css({'position':'absolute'})
    $('.neirong1 .u0:eq('+i+')').animate({'top':'-100px',"z-index":'6'})
    $('.neirong1 .u0:eq('+i+')'+' p').css({'color':'white','marginTop':'50px'})
  },function(){
     $('.neirong1 .u2:eq('+i+')').animate({'height':'0px'})
     $('.neirong1 .u0:eq('+i+')').css({'position':'absolute'})
    $('.neirong1 .u0:eq('+i+')').animate({'top':'0px',"z-index":'6'})
    $('.neirong1 .u0:eq('+i+')'+' p').css({'color':'#333','marginTop':'0'})
  })
})


$('.neirong1 .more').each(function(i){
  $(this).hover(function(){
  $('.neirong1 .more:eq('+i+')').animate({'color':'#E87232','backgroundColor':'white','fontSize':'23px'});
  $('.neirong1 .more .span0:eq('+i+')').animate({'left':'40px'})
  $('.neirong1 .more .span2:eq('+i+')').hide();
  // $('.neirong1 .more .span1:eq('+i+')').css({'right':'10px','top':'-20px'});
  // $('.neirong1 .more .span1:eq('+i+')').animate({'width':'50px','height':'50px','borderLeft':'2px solid white'},1000).fadeTo(0)
  $('.neirong1 .more .span1:eq('+i+')').css({transition:'all 0.5s ease'})
  $('.neirong1 .more .span1:eq('+i+')').css({transform:'scale(3,3)'}).fadeOut(500);

  },function(){
  $('.neirong1 .more:eq('+i+')').animate({'color':'white','backgroundColor':'#E87232','fontSize':'14px'});
  $('.neirong1 .more .span0:eq('+i+')').animate({'left':'50px'})
  $('.neirong1 .more .span2:eq('+i+')').show('slow');
    // $('.neirong1 .more .span1:eq('+i+')').animate({'width':'15px','height':'15px','borderTop':'2px solid white'},1000).fadeTo(0)
    // $('.neirong1 .more .span1:eq('+i+')').css({transition:'all 1s ease'})
    $('.neirong1 .more .span1:eq('+i+')').show().css({transform:'scale(1,1)'})

  })
})
//内容2

$('.neirong2 .gd').each(function(i){
  $(this).hover(function(){
      $('.neirong2 .gd:eq('+i+')').animate({'color':'#E87232','backgroundColor':'white','fontSize':'23px'});
      $('.neirong2 .gd .span3:eq('+i+')').hide();
      $('.neirong2 .gd .span2:eq('+i+')').css({transform:'scale(3,3)'}).fadeOut(500)
  },function(){
      $('.neirong2 .gd:eq('+i+')').animate({'color':'white','backgroundColor':'rgba(0,0,0,0)','fontSize':'14px'});
        $('.neirong2 .gd .span3:eq('+i+')').show('slow');
        $('.neirong2 .gd .span2:eq('+i+')').show().css({transform:'scale(1,1)'})
  })
})
var i=0
var timer=setInterval(function(){
   i++
   if(i%2==0){
      $('.neirong2 ul').animate({left:'0'},1000)
   }else{
      $('.neirong2 ul').animate({left:'-52%'},1000)
   }
},5000)
$('.neirong2 li').each(function(i){
    $(this).hover(function(){
        $('.neirong2 .yc:eq('+i+')').animate({'height':'300px'})
    },function(){
               $('.neirong2 .yc:eq('+i+')').animate({'height':'0px'})

    })
})


//内容3

var n=0
setInterval(function(){
n++;
if(n>24){
  n=24
}
$('.neirong3 .dibu .js:eq(0)').html(n+'小时');
},100)

var a=0
setInterval(function(){
a++;
if(a>3000){
  a=3000
}
$('.neirong3 .dibu .js:eq(1)').html(a+'家');
},1)

var b=0
setInterval(function(){
b++;
if(b>300){
  b=300
}
$('.neirong3 .dibu .js:eq(2)').html(b+'人');
},10)

var c=0
setInterval(function(){
c++;
if(c>100){
  c=100
}
$('.neirong3 .dibu .js:eq(3)').html(c+'家');
},10)

$('.neirong3 .flout').parent().each(function(i){
    var xian1=$('<div></div>');
    var xian2=$('<div></div>');
    var shang1=$('<div></div>');
    var shang2=$('<div></div>');
    xian1.css({
      borderLeft:'1px solid white',
      position:'absolute',
      'zi-index':'10',
      left:'10%',
      bottom:'10%',
      height:'0',
      width:'0'
    })
    xian2.css({
      borderBottom:'1px solid white',
      position:'absolute',
      'zi-index':'10',
      left:'10%',
      bottom:'10%',
       height:'0',
      width:'0'
    })
    shang1.css({
      borderTop:'1px solid white',
      position:'absolute',
      'zi-index':'10',
      top:'10%',
      right:'10%',
       height:'0',
      width:'0'

    })
    shang2.css({
      borderRight:'1px solid white',
      position:'absolute',
      'zi-index':'10',
      top:'10%',
      right:'10%',
       height:'0',
      width:'0'
    })
    xian1.appendTo('.neirong3 .flout:eq('+i+')');
    xian2.appendTo('.neirong3 .flout:eq('+i+')');
    shang1.appendTo('.neirong3 .flout:eq('+i+')');
    shang2.appendTo('.neirong3 .flout:eq('+i+')');
  $(this).hover(function(){
    $('.neirong3 .flout:eq('+i+')').show();
    xian1.animate({
      height:'81%',
      },2000)
    xian2.animate({
      width:'81%',
      },2000)
    shang1.animate({
      width:'81%',
      },2000)
    shang2.animate({
      height:'81%',
      },2000)  

  },function(){
    $('.neirong3 .flout:eq('+i+')').hide();

  xian1.css({
      height:'0%',
      })
    xian2.css({
      width:'0'
    })
    shang1.css({
      width:'0%',
      })
    shang2.css({
      height:'0%',
      })  

  })
})
//底部
$('footer .d2>span').each(function(i){
  $(this).hover(function(){
$('footer .d2>span>span:eq('+i+')').show()
  },function(){
    $('footer .d2>span>span:eq('+i+')').hide()

  })
})


//侧边
 $('.cebian_dh .qq').hover(function(){

  $('.cebian_dh .yc1').animate({'width':'250px'})
 }, function(){
    $('.cebian_dh .yc1').animate({'width':'0px'})
}) 

  $('.cebian_dh .dianhua').hover(function(){

  $('.cebian_dh .yc2').animate({'width':'250px'})
 }, function(){
    $('.cebian_dh .yc2').animate({'width':'0px'})
})


  $('.cebian_dh .shouji').hover(function(){

  $('.cebian_dh .yc3').animate({'width':'250px'})
 }, function(){
    $('.cebian_dh .yc3').animate({'width':'0px'})
})

var xianzai=1;
$('.cebian_dh .after').click(function(){
    
    if(xianzai===6){
      xianzai=5
    }
    var y=-475*xianzai+110
    $('.neirong_show0').animate({top:y})
    xianzai++
})

$('.cebian_dh .before').click(function(){
    
    if(xianzai===-1){
      xianzai=0
    }else if(xianzai==6){
      xianzai=4
    }

    var y=-475*xianzai+110
    $('.neirong_show0').animate({top:y})
    xianzai--
})


})
