'use strict';

/**
 * @ngdoc function
 * @name angularBasicsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBasicsApp
 */
angular.module('angularBasicsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
