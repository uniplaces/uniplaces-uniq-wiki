(function(document, window, undefined){
	var dropdown = $('#dropdown');
	var dropdownButton = $('#dropdown-button');
	var dropdownItem = $('.dropdown__item');

	dropdownButton.on('click', function(event) {
		event.preventDefault();
		dropdownButton.toggleClass('active')
		dropdown.toggleClass('active');
	});

	dropdownItem.on('click', function(event) {
		event.preventDefault();
		dropdownButton.toggleClass('active')
		dropdown.toggleClass('active');
		dropdownButton.html($(event.currentTarget).html());
	});
})(document, window);
