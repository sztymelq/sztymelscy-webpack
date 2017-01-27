import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Hero from './hero/hero';

let componentModule = angular.module('app.components', [
    Home,
    About,
    Hero
])
    .name;

export default componentModule;
