<main>
	<div>

	</div>
	<script>
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
	</script>
</main>