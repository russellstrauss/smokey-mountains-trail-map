var Utilities = require('./utils.js');
var TrailMap = require('./components/map.js');

(function () {
	
	$(document).ready(function() {
				
		TrailMap().init();
		
		$(window).trigger('resize');
	
	});
	
})();