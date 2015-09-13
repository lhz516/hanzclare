Template.layout.onRendered(function(){
  $('#bgm').prop('volume','0.2');
	$(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

	var lastScroll = 0;

	$(window).scroll(function() {
		//Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll && st > 50){ //scroll down
           	$(".navbar-fixed").css("opacity","0.1");
           	$(".navbar-fixed").css("transition-duration","0.6s");
            $("audio").css("opacity","0");
            $("audio").css("transition-duration","0.6s");
            // Meteor.setTimeout(function(){
            //   $(".navbar-fixed").css("display","none");
            // },600);
            //$("#sidenav-overlay").css("background","none"); 
            //$('.button-collapse').sideNav('hide');
        }
        else if(($(document).scrollTop()+$(this).height()-$(document).height())>-100){
           	$(".navbar-fixed").css("opacity","0.21");
            $("audio").css("opacity","0");
            //$('.button-collapse').sideNav('hide');
            // Meteor.setTimeout(function(){
            //   $(".navbar-fixed").css("display","none");
            // },600);
            //$('.button-collapse').sideNav('hide');       
        }else{
        	$(".navbar-fixed").css("opacity","1");
          $("audio").css("opacity","0.7");
          //$('.button-collapse').sideNav('hide');
          // Meteor.setTimeout(function(){
          //     $('.button-collapse').sideNav('hide');
          //   },50); 
        }
        //Updates scroll position
        lastScroll = st;
	});
});

Template.layout.events({
	"click .button-collapse":function(event,target){
		$("#sidenav-overlay").css("opacity","0");
	}
})