import constants from '../../common/constants';

class HomeController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.items = constants.items;

    this.map = {center: {latitude: 51.5145388, longitude: 18.2100481}, zoom: 8};
    this.marker = {
      id: 0,
      coords: {
        latitude: 51.5145388,
        longitude: 18.2100481
      },
      options: {draggable: false},
      events: {}
    };
  }
}

HomeController.$inject = ['$timeout'];

export default HomeController;
