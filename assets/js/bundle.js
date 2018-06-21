(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function() {
	
	var settings;
	
	return {
		
		settings: {
			trailData: [
				{  
					"name": "Abrams Falls Trail",
					"id": 1,
					"mileage": 4.2,
					"description": "Highlights: Abrams Creek and Abrams Falls"
				},
				{  
					"name": "Ace Gap Trail",
					"id": 2,
					"mileage": 5.6,
					"description": "Quiet Forest Hike / Wildflowers"
				},
				{  
					"name": "Albright Grove Loop Trail",
					"id": 3,
					"mileage": .7,
					"description": "Old Growth Forest / History / Solitude"
				},
				{  
					"name": "Alum Cave Trail",
					"id": 4,
					"mileage": 5,
					"description": "From Newfound Gap Road to Rainbow Falls Trail near the summit of Mt. LeConte. Highlights: Arch Rock, Alum Cave Bluffs, old-growth forest, great views."
				},
				{  
					"name": "Anthony Creek Trail",
					"id": 5,
					"mileage": 3.6,
					"description": "From Cades Cove Picnic Area to Bote Mountain Trail. Highlights: Anthony Creek / Panoramic Views / Mtn Laurel"
				},
				{  
					"name": "Appalachian Trail",
					"id": 6,
					"mileage": 71.4,
					"description": "The Appalachian Trail spans from Georgia to Maine, and 71.4 of its 2,200 miles are located in the Great Smokey Mountain National Park. It offers some of the toughest, most scenic, and most remote section of the park, following along the backbone of the rideline."
				},
				{  
					"name": "Balsam Mountain Trail",
					"id": 7,
					"mileage": 10.1,
					"description": "Solitude / Quiet Forest Hike"
				},
				{  
					"name": "Gregory Bald Trail",
					"id": 8,
					"mileage": 7.3,
					"description": "Panoramic Views / Flame Azaleas / Old Growth Forest"
				},
				{  
					"name": "Wolf Ridge Trail 1", // remove 1 and fix svg
					"id": 9,
					"mileage": 6.3,
					"description": ""
				},
				{  
					"name": "Twenty Mile Trail",
					"id": 10,
					"mileage": 5,
					"description": "Opportunity to see bears, unusual loggin history, easy walking."
				},
				{  
					"name": "Twenty Mile Loop Trail",
					"id": 11,
					"mileage": 2.9,
					"description": "Wildflowers"
				},
				{  
					"name": "Wolf Ridge Trail 1 ",
					"id": 12,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lost Cove Trail",
					"id": 13,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lakeshore Trail",
					"id": 14,
					"mileage": 16.6,
					"description": "Fishing, old home sites, solitude."
				},
				{  
					"name": "Tunnel Bypass",
					"id": 15,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Goldmine Loop Trail",
					"id": 16,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Ollie Cove Trail",
					"id": 17,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Hazel Creek Trail",
					"id": 18,
					"mileage": 14.7,
					"description": "Cultural history, trout fishing."
				},
				{  
					"name": "Welch Ridge Trail",
					"id": 19,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "High Rocks Trail 1 ",
					"id": 20,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Bear Creek Trail",
					"id": 21,
					"mileage": 5.9,
					"description": "Old logging camp, scenic views."
				},
				{  
					"name": "Forney Creek Trail",
					"id": 22,
					"mileage": 11.4,
					"description": "Highlights: cascades"
				},
				{  
					"name": "Jonas Creek Trail",
					"id": 23,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Springhouse Branch Trail",
					"id": 24,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Noland Creek Trail",
					"id": 25,
					"mileage": 10.3,
					"description": "Six backcountry campsites, fishing along the creek."
				},
				{  
					"name": "Clingmans Dome Trail",
					"id": 26,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Clingmans Dome Bypass Trail",
					"id": 27,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Noland Divide Trail",
					"id": 28,
					"mileage": 11.6,
					"description": "Large elevation change, diversity of forest types, beautiful spruce-fir forests, and views, especially in fall and winter."
				},
				{  
					"name": "Juney hank Falls Trail",
					"id": 29,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Deep Creek Horse Trail",
					"id": 30,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Deep Creek Trail",
					"id": 31,
					"mileage": 14.2,
					"description": "Scenic stream valley."
				},
				{  
					"name": "Indian Creek Trail",
					"id": 32,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Martins Gap Trail",
					"id": 33,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Deeplow Gap Trail",
					"id": 34,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Sunkota Ridge Trail",
					"id": 35,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Loop Trail",
					"id": 36,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Stone Pile gap Trail",
					"id": 37,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Indian Creek Motor Trail",
					"id": 38,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Thomas Divide Trail",
					"id": 39,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Mingus Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Fork Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Road Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Chimney Tops Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Whiteoak Branch Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Hannah Mountain Trail",
					"id": 0,
					"mileage": 9.5,
					"description": "Ridge walking, Flint Gap"
				},
				{  
					"name": "Rabbit Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Wet Bottom Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Gold Mine Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Cane Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Cooper Road Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Little Bottoms Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Hatcher Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Beard Cane Trail",
					"id": 0,
					"mileage": 4.2,
					"description": "Fringed polygala and other spring flowers."
				},
				{  
					"name": "Newton Bald Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Kanati Fork Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Pole Road Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Bone Valley Trail",
					"id": 0,
					"mileage": 1.8,
					"description": "Hall Cabin, Bone Valley Creek, fern display."
				},
				{  
					"name": "Eagle Creek Trail",
					"id": 0,
					"mileage": 8.9,
					"description": "Spence Field, Eagle Creek, many creek fords."
				},
				{  
					"name": "Jenkins Ridge Trail",
					"id": 0,
					"mileage": 8.9,
					"description": "Scenic views, variety of vegetation, Horace Kephart and Adams Westfeldt copper mine legacies."
				},
				{  
					"name": "Cold Spring Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "High Rocks Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Gregory Ridge Trail",
					"id": 0,
					"mileage": 5,
					"description": "Old-growth forest, views, access to Gregory Bald."
				},
				{  
					"name": "Long Hungry Ridge Trail",
					"id": 0,
					"mileage": 4.5,
					"description": "Highlights: Rye patch"
				},
				{  
					"name": "Hughes Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Dry Sluice Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Cabin Flats Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Bradley Fork Trail",
					"id": 0,
					"mileage": 7.3,
					"description": "Pretty Creeks"
				},
				{  
					"name": "Tow String Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Smokemont Loop Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Chasteen Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Grassy Branch Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Kephart Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Rainbow falls Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Bull Head Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Old Sugarlands Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Trillium Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Brushy Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Grapeyard Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Baskins Creek Trail",
					"id": 0,
					"mileage": 2.7,
					"description": "Waterfalls"
				},
				{  
					"name": "Twin Creeks Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Gatlinburg Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "The Boulevard Trail",
					"id": 0,
					"mileage": 5.4,
					"description": "Panoramic Views / Old Growth Forest / AnaKeesta Knob"
				},
				{  
					"name": "Enloe Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Hyatt Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Beech Gap Trail 1",
					"id": 0,
					"mileage": 2.5,
					"description": "Pleasant stream, mature forest."
				},
				{  
					"name": "Beech Gap Trail 2",
					"id": 0,
					"mileage": 2.8,
					"description": "Pleasant stream, mature forest, excellent views of Balsam Mountain."
				},
				{  
					"name": "Chestnut Bridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Big Creek Trail",
					"id": 0,
					"mileage": 5.8,
					"description": "Historic area, beautiful creek walk, varied forest scenes."
				},
				{  
					"name": "Camel Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Baxter Creek Trail",
					"id": 0,
					"mileage": 6.1,
					"description": "Panoramic Views / Old Growth Forest"
				},
				{  
					"name": "Mt. Sterling Ridge Trail",
					"id": 0,
					"mileage": 5.3,
					"description": "Panoramic Views"
				},
				{  
					"name": "Mt. Sterling Trail",
					"id": 0,
					"mileage": 2.7,
					"description": "Transition from hardwood to spruce-fir forest, dramatic views from crest."
				},
				{  
					"name": "Long Bunk Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Palmer Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Little catalooche Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Pretty Hollow Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Flat Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Rough Fork Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Big Fork Ridge Trail",
					"id": 0,
					"mileage": 3.2,
					"description": "Good views"
				},
				{  
					"name": "Caldwell Fork Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Boogerman Trail",
					"id": 0,
					"mileage": 4.1,
					"description": "Old growth forests, stone walls, views of Cataloochee Divide."
				},
				{  
					"name": "McKee Bridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Hemphill Bald Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Catalooche Divide Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Madron Bald Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Ramsey Cascades Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Porters Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Sweat Heifer Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Gunter Fork Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Low Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Gabes Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Old Settlers Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Snake Den Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lower Mount Camerer Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Mt. Camerer Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Swallow Fork Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Indian Grave Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Rich Mountain Loop Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Crooked Arm Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Scott Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Chestnut Top Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Roundtop Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Little Greenbriar Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Russell Field Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Bote Mountain Trail",
					"id": 0,
					"mileage": 6.9,
					"description": "Deeply banked, rhododendron flanked portion, incomparable to Spence Field at trail's end."
				},
				{  
					"name": "Schoolhouse Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Crib Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Finley Cane Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Turkey Pen Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "West Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lumber Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Meigs Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Meigs Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Curry Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Metcalf Bottoms Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Little Brier Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Laurel Falls Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Cove Mountain Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Greenbriar Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lynn Camp Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Middle Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Panther Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Miry Ridge Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Jakes Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Cucumber Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Little River Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Rough Creek Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Sugarland Mountain Trail",
					"id": 0,
					"mileage": 11.9,
					"description": "Great views, variety of forest types, large trees at the upper reaches."
				},
				{  
					"name": "Huskey Gap Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Goshen Prong Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				},
				{  
					"name": "Lead Cove Trail",
					"id": 0,
					"mileage": 0,
					"description": ""
				}
			]
		},
		
		init: function() {
			
			settings = this.settings;
			
			this.bindUI();
		},
		
		bindUI: function() {
			
			
			
			// Attach DOM node to object in JSON in order to reference it whenever you need and use JSON data as a source of truth
			// var trails = this.settings.trailData;
			
			// $('svg g').each(function(i) {
				
			// 	var trailID = $(this).attr('id');
									
			// 	var trailObject = trails.filter(function(obj) {
			// 		return obj.name == utils.formatID(trailID);
			// 	});
				
			// 	if (trailObject[0]) {
			// 		trailObject[0].DOMNode = $(this);
			// 	}
			// });
			
			$('svg#map').click(function(){
				$(this).find('#Landscape').toggleClass('hidden');
			});
			
			$('body').on('mouseenter', '.extended-hover-range', function() { // set up highlight on hover
				var $parent = $(this).closest('g');
				var $trail = $parent.find('.st0');
				$trail.css('stroke', 'orange');
				$('.info .trail-name').text(utils.formatID($parent.attr('id'))); // replace underscores in ID to spaces

				var trailID = $parent.attr('id');
				var trailItem = settings.trailData.filter(function(obj) {
					return obj.name == utils.formatID(trailID);
				});
				
				var trailObject = trailItem[0];
				
				$('.info .trail-length').text("Mileage: " + trailObject.mileage);
				$('.info .trail-description').text(trailObject.description);
			});

			$('body').on('mouseleave', '.extended-hover-range', function() {
				$(this).closest('g').find('.st0').css('stroke', '');
			});
			
			$('svg#map').on('mouseleave', function() {
				$('.trail-name, .trail-length, .trail-description').empty();
			});
			
			
			
			
			
			
			//console.log(trails)
			
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
},{}],2:[function(require,module,exports){
var Utilities = require('./utils.js');
var TrailMap = require('./components/map.js');

(function () {
	
	$(document).ready(function() {
				
		TrailMap().init();
		
		$(window).trigger('resize');
	
	});
	
})();
},{"./components/map.js":1,"./utils.js":3}],3:[function(require,module,exports){
(function () {
	
	var appSettings;
	
	window.utils = (function() {
		
		return {
			appSettings: {
				mobileMax: 767,
				tabletMin: 768,
				tabletMax: 991,
				desktopMin: 992,
				desktopLargeMin: 1200
			},
			
			mobile: function() {
				return window.innerWidth < appSettings.tabletMin;
			},
			
			tablet: function() {
				return (window.innerWidth > appSettings.mobileMax && window.innerWidth < appSettings.desktopMin);
			},
			
			getBreakpoint: function() {
				if (window.innerWidth < appSettings.tabletMin) return 'mobile';
				else if (window.innerWidth < appSettings.desktopMin) return 'tablet';
				else return 'desktop';
			},
			
			debounce: function(func, wait, immediate) {
				var timeout;
				return function () {
					var context = this, args = arguments;
					var later = function () {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			},
			
			/* Purpose: Detect if any of the element is currently within the viewport */
			anyOnScreen: function(element) {

				var win = $(window);
				
				var viewport = {
					top: win.scrollTop(),
					left: win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();

				var bounds = element.offset();
				bounds.right = bounds.left + element.outerWidth();
				bounds.bottom = bounds.top + element.outerHeight();

				return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

			},
			
			/* Purpose: Detect if an element is vertically on screen; if the top and bottom of the element are both within the viewport. */
			allOnScreen: function(element) {

				var win = $(window);
				
				var viewport = {
					top: win.scrollTop(),
					left: win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();

				var bounds = element.offset();
				bounds.right = bounds.left + element.outerWidth();
				bounds.bottom = bounds.top + element.outerHeight();

				return (!(viewport.bottom < bounds.top && viewport.top > bounds.bottom));

			},
			
			formatID: function(id) {
				return id.replace(/_/g , ' ');
			},
			
			secondsToMilliseconds: function(seconds) {
				return seconds * 1000;
			},
			
			/*
			* Purpose: This method allows you to temporarily disable an an element's transition so you can modify its proprties without having it animate those changing properties.
			* Params:
			* 	-element: The element you would like to modify.
			* 	-cssTransformation: The css transformation you would like to make, i.e. {'width': 0, 'height': 0} or 'border', '1px solid black'
			*/
			getTransitionDuration: function(element) {
				var $element = $(element);
				return utils.secondsToMilliseconds(parseFloat(getComputedStyle($element[0]).transitionDuration));
			}
		};
	})();

	module.exports = window.utils;

})();
},{}]},{},[2]);
