'use strict';

var defaultLanguage = localStorage.getItem('Globalsight-language') || 'en';
var defaultCurrency = localStorage.getItem('Globalsight-currency') || 'GLT';

angular.module('Globalsight',[
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngProgress',
  'ui.bootstrap',
  'ui.route',
  'monospaced.qrcode',
  'gettext',
  'angularMoment',
  'Globalsight.system',
  'Globalsight.socket',
  'Globalsight.blocks',
  'Globalsight.transactions',
  'Globalsight.address',
  'Globalsight.search',
  'Globalsight.status',
  'Globalsight.connection',
  'Globalsight.currency',
  'Globalsight.messages'
]);

angular.module('Globalsight.system', []);
angular.module('Globalsight.socket', []);
angular.module('Globalsight.blocks', []);
angular.module('Globalsight.transactions', []);
angular.module('Globalsight.address', []);
angular.module('Globalsight.search', []);
angular.module('Globalsight.status', []);
angular.module('Globalsight.connection', []);
angular.module('Globalsight.currency', []);
angular.module('Globalsight.messages', []);
