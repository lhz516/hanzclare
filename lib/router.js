Router.route("/",{
	action:function(){
		if(this.ready){
			this.layout("layout");
			this.render("home");
		}
	},
	data:function(){
		return {count:Count.findOne()};
	}
});

Router.route("/hanz_music",{
	action:function(){
			this.layout("layout");
			this.render("hanzMusic");
	}
});

Router.route("/what-i-would-say",{
	action:function(){
			this.layout("layout");
			this.render("whatIWouldSay");
	}
});
