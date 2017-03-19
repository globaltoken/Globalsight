'use strict';

//Global service for global variables
angular.module('Globalsight.system')
  .factory('Global',[
    function() {
    }
  ])
  .factory('Version',
    function($resource) {
      return $resource('/api/version');
  });
