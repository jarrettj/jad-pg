cp.pnp = new function() { 
	var self = this;
	
	// Publish
	this.publish = function (msg) { 
		return cordova.exec( this.successEvent, this.failedEvent, "com.jad.ivix.PnpPlugin", 'publish', [msg]); 
	},
    
	this.successEvent = function (params) {
    	alert('suc ' + params);
    },
	
    this.failedEvent = function (params) {
    	alert('fal ' + params);
    }

};