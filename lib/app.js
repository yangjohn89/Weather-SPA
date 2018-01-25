//Module
var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	
	 $locationProvider.html5Mode(true);
	.when('/', {

		templateUrl: 'home.htm',
		controller: 'homeController'

		
	})

	.when('/forecast', {

		templateUrl: 'forecast.htm',
		controller: 'forecastController'
	})

	

}])



