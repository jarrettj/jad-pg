cp.maps = new function() {
	var self = this;
	
	this.load = function () {
		location = navigator.geolocation.getCurrentPosition();
		
		if (location.length == 0) {
			jQuery('.location').append('<div>No location</div>');
		} 
		else {
			jQuery('.location').append('<div>' + location.latitude + '</div>');
		}
	}
};