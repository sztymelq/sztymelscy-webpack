import template from './jumbotron.html';
import controller from './jumbotron.controller';
import './jumbotron.scss';

export default {
  restrict: 'E',
  bindings: {
    jumboTitle: '@',
    icon: '@',
    name: '@'
  },
  transclude: true,
  template,
  controller
};
