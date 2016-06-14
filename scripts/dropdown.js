(function(document, window, undefined){
	var dropdown = '.dropdown';
	var dropdownButton = '.dropdown-button';
	var dropdownItem = '.dropdown__item';

	$(dropdownButton).on('click', function(event) {
		event.preventDefault();
		$(event.currentTarget).toggleClass('active')
		$(event.currentTarget).siblings(dropdown).toggleClass('active');
	});

	$(dropdownItem).on('click', function(event) {
		event.preventDefault();
		$(event.currentTarget).parent(dropdown).siblings(dropdownButton).html($(event.currentTarget).html());
		$(event.currentTarget).parent(dropdown).toggleClass('active');
	});
})(document, window);
