
var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'partials/home.html'
		})
		.state('home.list', {
			url:'/list',
			templateUrl:'partials/home-list.html'
		})
		.state('home.paragraph', {
			url:'/paragraph',
			template:'我是一个段落你知道不'
		})
		.state('about', {
			url:'/about',
			views: {
				'' : {
					templateUrl:'partials/about.html'
				},
				'columnOne@about' : {
					template:'左边的区域'
				},
				'columnTwo@about' : {
					templateUrl:'partials/table-data.html'
				}
			}
		})
});