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
    const selector = `#${elementId} > .jumbotron`;
    return new ScrollMagic.Scene({ triggerElement: `#${elementId}-trigger` }) //offset: 175
      .setVelocity(selector, { opacity: 1 }, { duration: 600 }) //width: '100%',
      // .setClassToggle(selector, 'visible')
      .addTo(this.scrollMagicController);
  }
}

HomeController.$inject = ['$timeout'];

export default HomeController;
