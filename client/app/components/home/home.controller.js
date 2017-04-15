import constants from '../../common/constants';

class HomeController {
  constructor() {
    this.name = 'home';
    this.items = constants.items;
    this.scrollMagicController = new ScrollMagic.Controller();

    this.timeMock = {
      months: 2,
      days: 4,
      hours: 5,
      minutes: 32,
      seconds: 21
    };

    this.time = [
      { id: 'months', name: 'Miesiące', value: 3 },
      { id: 'days', name: 'Dni', value: 2 },
      { id: 'hours', name: 'Godziny', value: 12 },
      { id: 'minutes', name: 'Minuty', value: 21 },
      { id: 'seconds', name: 'Sekundy', value: 34 }
    ];
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
    new ScrollMagic.Scene({ triggerElement: `#${elementId}-trigger`, offset: 175 })
      .setVelocity(`#${elementId} > .jumbotron`, { opacity: 1 }, { duration: 500 })
      .addTo(this.scrollMagicController);
  }
}

export default HomeController;
