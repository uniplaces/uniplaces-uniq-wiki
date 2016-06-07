(function(document, window, undefined){
	var toggle = $('.toggle');
	var toggleClass = 'toggle--active';

	toggle.on('click', function(event) {
		event.preventDefault();
		$(event.currentTarget).toggleClass(toggleClass)
	});

})(document, window);
