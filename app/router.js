define([
	'app/app',
	'page/pageCtr'
], function(app) {
	app.config(function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'page/page.html',
			controller: 'pageCtr'
		})
	});
})