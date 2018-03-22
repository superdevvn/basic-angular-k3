<<<<<<< HEAD
(function($) {

	'use strict';

	$('#sidebar').affix({
		offset: {
			top: ($('header').height())
		}
	});

	var setSidebarHeight = function() {
		$('#sidebar').height($(window).height() - 50);
	};

	setSidebarHeight();

	$(window).resize(function() {
		setSidebarHeight();
	});

=======
(function($) {

	'use strict';

	$('#sidebar').affix({
		offset: {
			top: ($('header').height())
		}
	});

	var setSidebarHeight = function() {
		$('#sidebar').height($(window).height() - 50);
	};

	setSidebarHeight();

	$(window).resize(function() {
		setSidebarHeight();
	});

>>>>>>> superdev_develop
}).apply(this, [jQuery]);