import angular from 'angular';
import constants from '../constants.js';

class NavbarController {
  constructor($window, $element, $interval) {
    this.name = 'navbar';
    this.items = constants.items;

    angular.element($window).bind('scroll', () => {
      $interval(() => {
        this.isFixedTop = $element[0].offsetTop <= $window.pageYOffset;
      });
    });
  }
}

NavbarController.$inject = ['$window', '$element', '$interval'];

export default NavbarController;
