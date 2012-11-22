jad.util = new function() {
	this.hideAll = function () { 
		jQuery('#jad-block').hide();
	},
	
	this.getHTML = function (selector, html, params) {
		jQuery.ajax({
			url: 'html/' + html, 
			success: function(data) {
						jQuery(selector).html(data);
					}
			});
	}
};
