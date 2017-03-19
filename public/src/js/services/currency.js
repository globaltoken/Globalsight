'use strict';

angular.module('Globalsight.currency').factory('Currency',
  function($resource) {
    return $resource('/api/currency');
});
