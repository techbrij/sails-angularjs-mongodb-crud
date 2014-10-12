define(function (require) {
  
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
  
  Controllers.controller('angEmpController', require('controllers/angEmployeeController'));
  
  return Controllers;
  
});