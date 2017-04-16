import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

require('script-loader!../../node_modules/jquery/dist/jquery.min.js');
require('script-loader!../../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js');
require('script-loader!../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.velocity.min.js');
require('script-loader!../../node_modules/flipclock/compiled/flipclock.js');
// require('script-loader!../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js');

angular.module('app', [
  ngAnimate,
  uiRouter,
  Common,
  Components
])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
