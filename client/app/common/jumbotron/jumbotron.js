import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jumbotronComponent from './jumbotron.component';

let jumbotronModule = angular.module('jumbotron', [
  uiRouter
])

.component('jumbotron', jumbotronComponent)

.name;

export default jumbotronModule;
