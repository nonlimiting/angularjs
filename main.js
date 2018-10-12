function requireJsConfig() {
	require.config({
		paths: {
			angular: 'assets/angular/angular',
			angRourer: 'assets/angular/angular-route'
		},
		shim: {
			angRourer: {deps: ['angular']}
		},
		priority: [
			'angular'
		]
	});

	require(['app/app', 'app/router'], function() {
		console.log(angular.element());
		angular.bootstrap(document, ['myApp']);
	});
}
requireJsConfig();

