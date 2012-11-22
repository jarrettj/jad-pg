cp.auth = new function() {
	var self = this;
	
	// Load contacts
	this.isLoggedIn = function () {
		//return true;
		return cordova.exec( this.successLoggedIn, this.failedLoggedIn, "com.jad.ivixim.AuthPlugin", 'auth');
	},
    
	this.successLoggedIn = function (params) {
    	jQuery('.login-window').hide();
    	jQuery('.top-nav').show();
    	
    	return true;
    },
	
    this.failedLoggedIn = function (params) {
    	jad.util.getHTML('.login-window', 'login.html');
		//jQuery('.login-window').html(loginHTML)
		jQuery('.login-window').show();
		jQuery('.top-nav').hide();
		
		return false;
    },
	
    this.login = function (username, password) {
    	return cordova.exec( this.successLogin, this.failedLogin, "com.jad.ivixim.AuthPlugin", 'auth', [username, password]);
    },
    
    this.successLogin = function (params) {
    	jQuery('.login-window').hide();
    	jQuery('.top-nav').show();
    	cp.contacts.load();
    	
    	return true;
    },
    
    this.failedLogin = function (params) {
    	// TODO : Handle message
		jQuery('.login-window').show();
		
		return false;
    }    
};