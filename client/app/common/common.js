import angular from 'angular';
import Navbar from './navbar/navbar';

import User from './user/user';
import Jumbotron from './jumbotron/jumbotron';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  Jumbotron
])
  
.name;

export default commonModule;
