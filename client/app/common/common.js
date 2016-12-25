import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Jumbotron from './jumbotron/jumbotron';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Jumbotron
])
  
.name;

export default commonModule;
