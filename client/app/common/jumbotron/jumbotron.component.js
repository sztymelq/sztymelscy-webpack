import template from './jumbotron.html';
import controller from './jumbotron.controller';
import './jumbotron.scss';

export default {
  restrict: 'E',
  bindings: {
    isActive: '<',
    jumboTitle: '@',
    contentPath: '@',
    color: '@',
    icon: '@',
    name: '@'
  },
  template,
  controller
};
