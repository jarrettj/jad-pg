jQuery(document).ready(function()
{
	// We'll catch form submission to do it in AJAX, but this works also with JS disabled
	jQuery('#login-form').submit(function(event)
	{
		// Stop full page load
		event.preventDefault();
		
		// Check fields
		var login = jQuery('#login').val();
		var pass = jQuery('#pass').val();
		
		if (!login || login.length == 0) {
			jQuery('#login-block').removeBlockMessages().blockMessage('Please enter your user name', {type: 'warning'});
		}
		else if (!pass || pass.length == 0) {
			jQuery('#login-block').removeBlockMessages().blockMessage('Please enter your password', {type: 'warning'});
		}
		else {
			var submitBt = jQuery(this).find('button[type=submit]');
			submitBt.disableBt();
			
			// Target url
			var target = jQuery(this).attr('action');
			
			if (!target || target == '') {
				// Page url without hash
				target = document.location.href.match(/^([^#]+)/)[1];
			}
			
			// Request
			var data = {
				a: jQuery('#a').val(),
				login: login,
				pass: pass
			};
			
			var redirect = jQuery('#redirect');
			
			if (redirect.length > 0) {
				data.redirect = redirect.val();
			}
			
			// Start timer
			var sendTimer = new Date().getTime();
			
			cp.auth.login(login, pass);
			
			// Message
			jQuery('#login-block').removeBlockMessages().blockMessage('Please wait, cheking login...', {type: 'loading'});
		}
	});
});