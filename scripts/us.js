$(document).ready(function($) {
	function getRandom(n){return Math.floor(Math.random()*n+1)}
	var i,j;
	$(".lebal").each(function(index){
		i=getRandom(590)+230;
		j=getRandom(120)+330;
		$(this).offset({top:j,left:i});
	})
	if($.browser.msie && ($.browser.version == "6.0") && !$.support.style) { 
		$(".le").attr("src",function(index,attr){
		var t=index;
		t=t%12+1;
		return "images/"+t+".gif";
	});
     } 
	  else{	
	  $(".le").attr("src",function(index,attr){
		var t=index;
		t=t%12+1;
		return "images/"+t+".png";
	});
	};
	
	$(".lebal").draggable({ distance: 10,containment:"parent",cancel:".box_1_2" });
	$(".lebal").each(function(){
		$(this).bind("click",function(){
	    $(".lebal").css({"z-index":"0"});
		$(this).css({"z-index":"1"});
	})
	});
	$(".la").attr("src",function(index,attr){
			i=index+30;
			return "images/"+i+".png";
	});
	$(".box10").each(function(index){
	    var f=index;
	    var k;
		$(this).bind("click",function(){
	        var v=$(this).text();
	        $(".abc").text(v);
			$(".box10").removeClass("nav_show");
			$(this).addClass("nav_show");
			$(".la").attr("src",function(index,attr){
			i=index+30;
			return "images/"+i+".png";
			});
			k=f+20;
			$(".la:nth("+f+")").attr("src","images/"+k+".png");
			$(".right_main").removeClass("now");
			$(".right_main:nth("+f+")").addClass("now");
			$(".cyuan").addClass('pnow');
			$(".time_line").removeClass("pnow");
		});
	})
	$(".button_l").bind("click",function(){
		var v=$(".box10:nth(4)").text();
	        $(".abc").text(v);
			$(".box10").removeClass("nav_show");
			$(".box10:nth(4)").addClass("nav_show");
			$(".la").attr("src",function(index,attr){
			i=index+30;
			return "images/"+i+".png";
			});
			$(".la:nth(4)").attr("src","images/24.png");
			$(".right_main").removeClass("now");
			$(".right_main:nth(4)").addClass("now");
			$(".cyuan").addClass('pnow');
			$(".time_line").removeClass("pnow");			
    		$(window).scrollTop(700);
	})
	$(".cyuan").addClass("pnow");
	$(".time_pi").each(function(index){
		var j=index;
		$(this).bind("click",function(){
			$(".time_line").addClass("pnow");
			$(".cyuan:nth("+j+")").removeClass("pnow")
		})
	})
	$(".return").bind("click",function(){
		$(".cyuan").addClass("pnow");
		$(".time_line").removeClass("pnow")
	})

	$(".button_l,.abc,.e,.lebal,.box10,.time_pi,.return").each(function(){
		$(this).mouseover(function(){
			this.style.cursor="pointer";
		})
	})
});