import ScrollMagic from 'ScrollMagic';

class HomeController {
  constructor() {
    this.name = 'home';
  }

  $onInit() {
      const smCtrl = new ScrollMagic.Controller();

      new ScrollMagic.Scene({triggerElement: "#trigger"})
          .setVelocity(".section.jumbotron", {opacity: 0}, {duration: 400})
          .addTo(smCtrl);

    console.log('on init!');
    console.log('ScrollMagic', ScrollMagic);
  }
}

export default HomeController;
