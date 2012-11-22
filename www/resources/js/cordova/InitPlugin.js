cp.init = new function () { 
	var self = this;
	
	this.load = function () {
		jad.util.hideAll();
		// Check if user is logged in
		var loggedIn = cp.auth.isLoggedIn();
		
		if (loggedIn == true) { 
 			// Load contacts
			cp.contacts.load();
		}
	}
};