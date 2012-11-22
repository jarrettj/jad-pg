cp.contacts = new function() {
	var self = this;
	var max = 10;
	
	// Load contacts
	this.load = function () { 
		var options = new ContactFindOptions();
		options.filter="";
		options.multiple=true; 
		var fields = ["id", "displayName", "photos"];
		navigator.contacts.find(fields, this.onSuccess, this.onError, options);
	},
    
	this.onSuccess = function (contacts) {
		if (contacts.length == 0) {
			jQuery('.contacts').append('<div>No contacts</div>');
		}
		
		//for (var i=0; i<contacts.length; i++) {
		for (var i=0; i<10; i++) {
			var contact = '';
			
			contact = contact + '<ul class="roundRectangle box">'
			contact = contact + '<li class="contact" id="' + contacts[i].id + 
					'" onclick="cp.contacts.loadContact(this)">';
			contact = contact + '<div class="photo">';
			contact = contact + '</div>';
			contact = contact + '<div class="name">';
			contact = contact + contacts[i].displayName;
			contact = contact + '</div>';
			contact = contact + '</li>';
			contact = contact + '</ul>';
			
			jQuery('.contacts').append(contact);
		}
		
		jQuery('.contacts').show();
	},
	
	this.onError = function (params) {
		// TODO : Handle error
		alert('Could not retrieve contacts')
	},
	
	this.loadContact = function (contact) {
		jQuery('.contacts').hide();
		var id = jQuery(contact).attr('id');
		var contact = '';
		contact = contact + '<input type=textarea readonly=readonly>';
		contact = contact + '<input type=text name=chat id="' + id + '">';
		contact = contact + '<button onclick="cp.contacts.publish(' + id + ')"> Send </button>';
		jQuery('.contact-window').append(contact);
		jQuery('.contact-window').show();
	},
	
	this.publish = function (id) {
		var msg = jQuery('[name="chat"][id=' + id + ']').val();
		cp.PnpPlugin.publish(msg);
	}
};