import angular from 'angular';
import Navbar from './navbar/navbar';
import Jumbotron from './jumbotron/jumbotron';

const commonModule = angular.module('app.common', [
  Navbar,
  Jumbotron
]).name;

export default commonModule;
