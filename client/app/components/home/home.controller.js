import constants from '../../common/constants';

class HomeController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.items = constants.items;
    this.scrollMagicController = new ScrollMagic.Controller();

    this.map = { center: { latitude: 51.5145388, longitude: 18.2100481 }, zoom: 8 };
    this.marker = {
      id: 0,
      coords: {
        latitude: 51.5145388,
        longitude: 18.2100481
      },
      options: { draggable: false },
      events: {}
    };
  }

  $onInit() {
    this.registerVelocity('slub');
    this.registerVelocity('wesele');
    this.registerVelocity('dojazd');
    this.registerVelocity('zakwaterowanie');
  }

  registerVelocity(elementId) {
    const selector = `#${elementId} > .jumbotron`;
    // const selector = `#${elementId} .boxx`;
    return new ScrollMagic.Scene({
      triggerElement: `#${elementId}-trigger`,
      offset: 50
    })//offset: 175
      .setVelocity(selector, { opacity: 1 }, { duration: 600 })
      // .setClassToggle(selector, 'visible')
      .addTo(this.scrollMagicController);
  }
}

HomeController.$inject = ['$timeout'];

export default HomeController;
