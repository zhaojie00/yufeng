$(function(){
	$(window).scroll(function(){
		var time = null;
		var sTop = $(document.documentElement).scrollTop() + $(document.body).scrollTop();
		if(sTop>40){
			sTop = 40;
		}
		$('.nav-top').css('top',40-sTop+'px');
		
		$('#top').click(function(){
			clearInterval(time);
			delaytop(0);
		})
		function delaytop(x){
			var sTop = $(document.documentElement).scrollTop() + $(document.body).scrollTop();
			var sd = sTop/30;
			time = setInterval(function(){
				sTop = (sTop>x)?(sTop-=sd):(sTop+=sd);
				if(Math.abs(sTop-x)<=sd){
					sTop=x;
					clearInterval(time);					
				}
				$('html,body').scrollTop(sTop);
			},1000/60);
		}
	})

	/*搜索框*/
	$('.last').click(function(){
		if($('.sea').css("display")=="none"){
			$('.sea').show();
		}else{
			$('.sea').hide();
		}
	})

	/*下拉菜单效果*/
	$('#ul1 li').each(function(){
		var i = $(this).index();
		$(this).hover(function(){
			$('.xia-one').eq(i).stop(true).slideDown();//以滑动方式显示隐藏
		},function(){
			$('.xia-one').eq(i).stop(true).slideUp();
		})
	})
	/*右侧侧边栏*/
	$('#ce').click(function(){
		console.log(parseInt($('.ce-box').css('right')));
		if(parseInt($('.ce-box').css('right'))==0){
			$('.ce-ll').css('background-position','-30px -396px');
			$('.ce-box').animate({'right':-160+'px',})
		}else{
			$('.ce-ll').css('background-position','0px -396px');
			$('.ce-box').animate({'right':0+'px',})
		}
	})

	/*lunbo*/
	var oUl1 = $('#ul2');
	var oLi = $('#ul2 li')
	var LiWith = oLi.width();
	var long = oLi.length;
	var timer = null;
	var i = 0;
	$('.qie').mouseover(function(){
		clearInterval(timer);
	})
	$('.qie').mouseout(function(){
		auto();
	})
	auto();
	function auto(){		
		clearInterval(timer);
		timer = setInterval(function(){	
			(i<long-1)?(i++):(i=0);
			oUl1.stop(true).animate({left:-LiWith*i+'px',});
		},2000)
	}

	$('#rg').click(function(){
		clearInterval(timer);
			(i<long-1)?(i++):(i=0);
			oUl1.stop(true).animate({left:-LiWith*i+'px',});
	})
	
	$('#lf').click(function(){	
		clearInterval(timer);
		(i>0)?(i--):(i=long-1);
		oUl1.stop(true).animate({left:-LiWith*i+'px',});
	})
	/*照片轮换*/
	var k = $('#ul6 li').width();
	$('.rit').click(function(){
		$('#ul6').append($('#ul6 li:last').clone());
		$('#ul6').css('left',0);
		$('#ul6').stop(true).animate({left:-k+'px',},300,function(){
			$('#ul6 li').first().remove();
		});
	})
	$('.lef').click(function(){
		$('#ul6').append($('#ul6 li:last').clone());
		$('#ul6').css('left',-k);
		$('#ul6').stop(true).animate({left:0+'px',},300,function(){
			$('#ul6 li').last().remove();
		});
	})

	/*许可证轮换*/
	$(function(){
		var oUl7 = $('#ul7');
		var oLi7 = $('#ul7 li');
		var long = oLi7.length;
		console.log(long);
		var arrClass = ['zuo','you','zhong'];
		for(var i=0; i<long; i++){
			if(i<1){
				oLi7.eq(i).addClass('zuo');
			}else if(i>1){
				oLi7.eq(i).addClass('zhong');
			}else{
				oLi7.eq(i).addClass('you');
			}
		}
		var j=0;
		$('.rit-1').click(function(){
			j<3?j++:j=0;
			arrClass.push(arrClass[0]);
			 arrClass.shift();
			console.log(arrClass);
			for(var i=0; i<long; i++){				
				if(i<1){
						oLi7.eq(i).removeClass().addClass(arrClass[i+1]);
				}else if(i>1){
					oLi7.eq(i).removeClass().addClass(arrClass[0]);
				}else{
					oLi7.eq(i).removeClass().addClass(arrClass[i+1]);
				}				
			}
		})
		$('.lef-1').click(function(){			
			j<3?j++:j=0;
			arrClass.push(arrClass[0]);
			 arrClass.shift();
			console.log(arrClass);
			for(var i=0; i<long; i++){				
			if(i<1){
					oLi7.eq(i).removeClass().addClass(arrClass[i+1]);

				}else if(i>1){
					oLi7.eq(i).removeClass().addClass(arrClass[0]);
				}else{
					oLi7.eq(i).removeClass().addClass(arrClass[i+1]);
				}				
			}
		})
	})
	/*连续滚动*/
	$(function(){
		var i =0;
		var speed =0;
		var oliWidth = $('.ul8 li').width()+55;
		var UWidth = $('.ul8 li').width()*$('.ul8 li').length+$('.ul8 li').length*55+40;
		$('.ul8').css('width',UWidth);
		// 	$('.con-r').click(function(){
		// 		speed+=oliWidth;
		// 		if(speed<(UWidth/2+405)){
		// 		$('.ul8').stop(true).animate({
		// 			left:-speed +'px',
		// 		})
		// 		}else{				
		// 			$('.ul8').css('left',0+'px');
		// 			speed = 0;
		// 		}
		// })
		$('.con-r').click(function(){
			if((oliWidth*i)<(UWidth/2+405)){
				i++;
			}else{
				$('.ul8').css('left',116+'px');		
				i=0;
			}
			$('.ul8').stop(true).animate({
				left:-i*oliWidth +'px',
			})
			
		})
		$('.con-l').click(function(){
			if((oliWidth*i)>(UWidth/2)){
				$('.ul8').css('left',-(UWidth/2+455)+'px');		
				i=0;
			}else{
				i++;
			}
			$('.ul8').stop(true).animate({
				left:-(UWidth/2+195)+i*oliWidth +'px',
			})
			
		})

	})
	/*最后一个滚动*/
	$(function(){
		var long = $('#ul9 li').length;
		$('#ul9').attr({width:long*$('#ul9 li').width()+long*68 +'px',});
		$('.spa2').click(function(){				
			if(!$('#ul9 li').is(':animated')){
				$('#ul9').append($('#ul9 li:first').clone());
				$('#ul9 li').first().animate({
					marginLeft:-261,
				},500,function(){
					$('#ul9 li').first().remove();
				})
			}
		})

		$('.spa1').click(function(){				
			if(!$('#ul9 li').is(':animated')){
				$('#ul9').prepend($('#ul9 li:last').clone());
				$('#ul9 li').first().css({'margin-left':-261+'px',})
				$('#ul9 li').first().animate({
					marginLeft:0,
				},500,function(){
					$('#ul9 li').last().remove();
				})
			}
		})

	})
	/*留言框*/
	$(function(){
		var a = 0;
		$('#liu input,textarea').each(function(){			
			$(this).click(function(){
				$(this).focus().val('');
				$(this).blur(function(){
					if($(this).val()==''){
						$(this).siblings('p').show();
						a++;
					}else{
						a = 0;
					}					
				})
			})
		})
		$('.sub').click(function(){
			if(a!=0){
				console.log('请完善资料!!!');
			}
		})
		$('.res').click(function(){
				$('#liu input,textarea').each(function(){
				$(this).val('');
				$(this).siblings('p').hide();
			})
		})
	})

})/*E $fun*/