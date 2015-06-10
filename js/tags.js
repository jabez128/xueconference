riot.tag('app', '<div class="container"> <banner></banner> <sidebar items="{opts.sidebar}"></sidebar> <main link="{opts.initial}"></main> <div style="clear:both;"></div> </div>', function(opts) {

});
riot.tag('banner', '<img src="../assets/banner.png" class="banner">', function(opts) {

});
riot.tag('main', '<div> </div>', function(opts) {
		var link = opts.link+'?'+Math.random().toString(32).slice(2);
		var  self = this
		coco = self.root
		setTimeout(function(){
			$(self.root).children('div').load(link);
		},0);
		eventbus.on('switch',function(link){
			var link = link+ '?'+Math.random().toString(32).slice(2);
			$(self.root).children('div').load(link);
		})
	
});
riot.tag('sidebar', '<div class="sidebar"> <div each="{items}"> <a href="javascript: void 0" data-link="{link}" onclick="{parent.switch}">{title}</a> </div> <div>', function(opts) {
	self = this;
	this.items = opts.items
	this.switch = function (e){
		var link = $(e.target).data('link');
		eventbus.trigger('switch',link);
	}

});