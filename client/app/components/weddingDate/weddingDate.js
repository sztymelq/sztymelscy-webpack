import angular from 'angular';
import weddingDateComponent from './weddingDate.component';

const weddingDateModule = angular.module('weddingDate', [])

.component('weddingDate', weddingDateComponent).name;

export default weddingDateModule;
