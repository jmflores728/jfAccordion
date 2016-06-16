/**
 * jfAccordion.js v1.0.0
 * http://www.jeff-flores.com
 * 
 * Copyright 2015
 */
;(function($, window, document, undefined) {
	var timer;
	var Accordian = {
		currentSlide: 0,
		animating: false,
		paused: false,
		init: function(options, elem, accordians) {
			var self = this;
			this.elem = elem;
			this.$elem = $(elem);
			this.accordians = accordians;

			this.options = $.extend({}, $.fn.jfAccordion.options, options);
			for (var key in this.options) {
			  if (this.options.hasOwnProperty(key)) {
			  	this[key] = this.options[key];
			  }
			}
			this.heading = this.$elem.find(".heading");
			this.contentArea = this.$elem.find(".content-area");

			this.addClickEvents();
			if (!this.$elem.hasClass("open")) this.contentArea.hide();
			this.$elem.data(this);
		},
		addClickEvents: function() {
			var self = this;
			this.heading.on('click', function() {
				if(self.$elem.hasClass("open")) {
					self.closeAccordian(self);
				} else {
					self.openAccordian(self);
				}
			});
		},
		removeClickEvents: function() {
			this.heading.off('click');
		},
		openAccordian: function(self) {
			self.removeClickEvents();
			if(self.closeOtherAccordians) {
				$(self.accordians).each(function() {
					$(this).removeClass("open").find(".content-area").delay(self.animationDelay).slideUp(self.animationSpeed);
				});
			}
			self.$elem.addClass("open");
			self.contentArea.delay(self.animationDelay).slideDown(self.animationSpeed, function() { self.addClickEvents(); });
		},
		closeAccordian: function(self) {
			self.removeClickEvents();
			self.$elem.removeClass("open");
			self.contentArea.delay(self.animationDelay).slideUp(self.animationSpeed, function() { self.addClickEvents(); });
		}
	};

	$.fn.jfAccordion = function(options) {
		var self = this;
		return this.each(function() {
			var accordian = Object.create(Accordian);
			accordian.init(options, this, self);
		});
	};

	$.fn.jfAccordion.options = {
		closeOtherAccordians: false, // Close other accordians when opening an accordian
		animationSpeed: 300, // Animation transition speed
		animationDelay: 0 // How long to wait before animating
	};

})(jQuery, window, document);