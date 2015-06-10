<sidebar>
	<div class='sidebar'>
		<div each={items}>
			<a href='javascript: void 0' data-link={link} onclick={parent.switch}>{title}</a>
		</div>
	<div>
	self = this;
	this.items = opts.items
	this.switch = function (e){
		var link = $(e.target).data('link');
		eventbus.trigger('switch',link);
	}
</sidebar>