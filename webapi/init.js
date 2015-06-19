var server = require('../server');
var staticRoute = require('./static');
server.route(staticRoute);

function applyRoutes(routes){
	for(var r in routes){
		var route = routes[r];
		server.route(r);
	}
}