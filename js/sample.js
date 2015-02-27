	$(function(){
	
	 var boardImg = 24;
	  
		for(var i = 1; i<= boardImg / 2; i++){
		 
				$('#board1').append($("<img src='img/sample/small"+i.toString()+".jpg' alt='img' />"))
			}
		for(var i = 13; i<= boardImg;  ++i){
			$('#board2').append($("<img src='img/sample/small"+i.toString()+".jpg' alt='null' />"))
		}
        $(window).on('load resize', function(){
		  var h = $('img[src*="small"]').width()
			$('div[id*="board"] img').css({
				'height': h + "px",
				});
		$('#cyclelite').cycle({
		fx: 'fadeout',
			timeout: 1,
			speed: 6000,
			easing: 'linear',
			delay: 2000
		});
		});//load func
	});