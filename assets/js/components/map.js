module.exports = function() {
	
	var settings;
	
	return {
		
		settings: {
			
		},
		
		init: function() {
			
			settings = this.settings;
			
			this.bindUI();
		},
		
		bindUI: function() {
			
			$('svg#map').click(function(){
				$(this).find('#Landscape').toggleClass('hidden');
			});
			
			$('body').on('mouseenter', '.extended-hover-range', function() {
				var $parent = $(this).closest('g');
				var $trail = $parent.find('.st0');
				$trail.css('stroke', 'orange');
				console.log($trail.attr('id'));
				$('.info .trail-name').text($parent.attr('id').replace(/_/g , ' ')); // replace underscores in ID to spaces
			});

			$('body').on('mouseleave', '.extended-hover-range', function() {
				$(this).closest('g').find('.st0').css('stroke', '');
			});
			
			//create clones of trails that can be invisible in order to trigger larger areas
			$('svg#map').find('.st0').each(function() {
				var $parent = $(this).closest('g');
				var $original = $(this);
				var $copy = $(this).clone();
				$copy.css({
					'stroke': 'transparent',
					'fill': 'none',
					'stroke-width': 40,
					'position': 'relative',
					'z-index': '9999'
				});
				$parent.prepend($copy);
				$copy.removeAttr('class').addClass('extended-hover-range');
			});
		}
	};
};