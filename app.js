if (Meteor.isClient) {
	// Client code goes here.  Duh?
}

if (Meteor.isServer) {
	// Server code goes here.
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
