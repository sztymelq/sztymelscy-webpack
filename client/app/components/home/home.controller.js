import constants from '../../common/constants';

class HomeController {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.items = constants.items;
    this.scrollMagicController = new ScrollMagic.Controller();
  }

  $onInit() {
    this.registerVelocity('slub');
    this.registerVelocity('wesele');
    this.registerVelocity('dojazd');
    this.registerVelocity('zakwaterowanie');

    // new ScrollMagic.Scene({
    //     triggerElement: "#trigger"
    // }).setTween("#onas", 0.5, {backgroundColor: "green", scale: 2.5})
    //     .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    //     .addTo(smCtrl);
  }

  registerVelocity(elementId) {
    // const selector = `#${elementId} > .jumbotron`;
    // console.log('$(selector)', $(selector));
    const selector = `#${elementId} .boxx`;
    return new ScrollMagic.Scene({
      triggerElement: `#${elementId}-trigger`,
      offset: 50
    })//offset: 175
      .setVelocity(selector, { width: '100%', opacity: 1 }, { duration: 600 })
      // .setClassToggle(selector, 'visible')
      .addTo(this.scrollMagicController);
  }
}

HomeController.$inject = ['$timeout'];

export default HomeController;
