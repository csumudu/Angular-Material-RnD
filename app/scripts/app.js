'use strict';
/**
 * @ngdoc overview
 * @name angularBasicsApp
 * @description
 * # angularBasicsApp
 *
 * Main module of the application.
 */
angular
  .module('angularBasicsApp', ['ngRoute','ngMaterial'])
    .config(function($routeProvider){
        $routeProvider.when('/home',{
          templateUrl : 'views/home.html',
          controller : 'HomeController'
        })
        .otherwise({
                redirectTo : '/home'
         });
    });
