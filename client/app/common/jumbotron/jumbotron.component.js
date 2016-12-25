import template from './jumbotron.html';
import controller from './jumbotron.controller';
import './jumbotron.scss';

let jumbotronComponent = {
  restrict: 'E',
  bindings: {
      jumboTitle: '@',
      content: '@',
      contentPath: '@',
      color: '@'
  },
  template,
  controller
};

export default jumbotronComponent;
