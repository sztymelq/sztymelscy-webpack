import constants from '../../common/constants';

class HomeController {
  constructor($interval) {
    this.name = 'home';
    this.$interval = $interval;
    this.items = constants.items;
    this.scrollMagicController = new ScrollMagic.Controller();

    this.weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);

    this.time = [
      {id: 'months', name: 'Miesiące', value: 3},
      {id: 'days', name: 'Dni', value: 2},
      {id: 'hours', name: 'Godziny', value: 12},
      {id: 'minutes', name: 'Minuty', value: 21},
      {id: 'seconds', name: 'Sekundy', value: 34}
    ];
  }

  onCountdownChange() {
    const timeRemaining = countdown(this.weddingDate);

    this.time = this.time.map((timeItem) => Object.assign(timeItem, {
      value: timeRemaining[timeItem.id]
    }));
  }

  $onInit() {
    this.$interval(this.onCountdownChange.bind(this), 1000);
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
    new ScrollMagic.Scene({ triggerElement: `#${elementId}-trigger`, offset: 175 })
      .setVelocity(selector, {height: '100vh', width: '100%', opacity: 1 }, { duration: 500 })
      // .setClassToggle(selector, 'notBlurred')
      .addTo(this.scrollMagicController);
  }
}

HomeController.$inject = ['$interval'];

export default HomeController;
