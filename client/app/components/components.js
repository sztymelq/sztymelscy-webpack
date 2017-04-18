import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Hero from './hero/hero';
import WeddingDate from './weddingDate/weddingDate';

export default angular.module('app.components', [
  Home,
  About,
  Hero,
  WeddingDate
]).name;
