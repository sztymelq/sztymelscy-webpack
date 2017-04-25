import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import 'lodash';
import 'angular-simple-logger';
import 'angular-google-maps';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

require('script-loader!../../node_modules/countdown.js');

angular.module('app', [
  ngAnimate,
  uiRouter,
  Common,
  Components,
  'uiGmapgoogle-maps'
])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    'ngInject';
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCRdZn-jvR5LamdPlJCFLcjRLtnoqjj-o4',
    });
  })

  .component('app', AppComponent);
