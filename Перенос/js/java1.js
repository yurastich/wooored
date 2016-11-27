$(document).ready(function()
{



$(window).scroll(function(){

var q2BlockTop = $(".q2Block").offset().top;
var scrollTop=$(window).scrollTop();

if (scrollTop>q2BlockTop-(q2BlockTop/2)) {
	$(".q2BlockHide").removeClass("q2BlockHide");
	}


//console.log(scrollTop);

var q3Top = $(".q3").offset().top-300;

	if (scrollTop>q3Top) {
		setTimeout(function(){
 			$(".q3Block1").removeClass("q3BlockHide");
  		},100);
		setTimeout(function(){
 			$(".q3Block2").removeClass("q3BlockHide");
  		},300);
  		setTimeout(function(){
 			$(".q3Block3").removeClass("q3BlockHide");
  		},500);
	}

var q4Top = $(".q4").offset().top-500;
	if (scrollTop>q4Top) {
		$(".q4BlocksHide").removeClass("q4BlocksHide");
		}


var q5Top = $(".q5").offset().top;
	if (scrollTop>q5Top) {
		$(".q5BlocksHide").removeClass("q5BlocksHide");
		setTimeout(function(){
 			$(".q5Button").removeClass("q3BlockHide");
  		},100);
	}


	var q6Top = $(".q6").offset().top-100;
	if (scrollTop>q6Top) {
		$(".q6PlayButtonHide").removeClass("q6PlayButtonHide");
	}

	var q7Top = $(".q7").offset().top-400;
	if (scrollTop>q7Top) {
		$(".q7TitleHide").removeClass("q7TitleHide");
	}

	var q8Top = $(".q8").offset().top-500;
	
	if (scrollTop>q8Top) {
		$(".q8Hide").removeClass("q8Hide");
		setTimeout(function(){
 			$(".q8Shell").removeClass("q8ShellHide");
  		},300);
	}

	var q9Top = $(".q9").offset().top-100;
	
		if (scrollTop>q9Top) {
			$(".q9Hide").removeClass("q9Hide");
		}

	var q10BotTitle = $(".q10Title").offset().top-800;
	
		if (scrollTop>q10BotTitle) {
			$(".q10Title").removeClass("q10TitleHide");
		setTimeout(function(){
 			$(".q10Form").removeClass("q10FormHide");
  		},300);
  		setTimeout(function(){
 			$(".q10Contacts").removeClass("q10ContactsHide");
  		},500);
		}


	
});







$(".q7BlockIcon1").click(function(){
$(".q7Block").addClass("q7BlockHide");
$(".q7Block1").removeClass("q7Block1Hide1");
});

$("#block1Hide").click(function(){
$(".q7Block1").addClass("q7Block1Hide1");
$(".q7Block").removeClass("q7BlockHide");
});


$(".q7BlockIcon2").click(function(){
$(".q7Block").addClass("q7BlockHide");
$(".q7Block2").removeClass("q7Block1Hide2");
});

$(".q7BlockIconCube").click(function(){
$(".q7Block2").addClass("q7Block1Hide2");
$(".q7Block").removeClass("q7BlockHide");
});


$(".q7BlockIcon3").click(function(){
$(".q7Block").addClass("q7BlockHide");
$(".q7Block3").removeClass("q7Block1Hide3");

$(".q7BlockIconTime").click(function(){
$(".q7Block3").addClass("q7Block1Hide3");
$(".q7Block").removeClass("q7BlockHide");
});





});
});/*КОНЕЦ*/
    
