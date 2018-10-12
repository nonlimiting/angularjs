define([
	'app/app'
],function(app){
	app.controller("pageCtr",function($scope){
		document.getElementById("test").innerHTML = navigator.userAgent;
	})
})