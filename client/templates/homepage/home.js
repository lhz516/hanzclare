Template.home.onRendered(function(){
	$('.slider').slider({full_width: true});
    $('.parallax').parallax();	
});
Template.home.events({
	"touchend #heart":function(){
		$("#heart").addClass("rubberBand");
		Count.update("wk8jb5fq5HEno3AMB",{$inc:{loved:1}});
		Materialize.toast('LOVE +'+Count.findOne("wk8jb5fq5HEno3AMB").loved, 2000);
		$('#heart').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('#heart').removeClass("rubberBand");
		});
	}
});