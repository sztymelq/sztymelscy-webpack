class HomeController {
  constructor() {
    this.name = 'home';
    this.scrollMagicController = new ScrollMagic.Controller();
  }

  $onInit() {
      this.registerVelocity('onas');
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
    new ScrollMagic.Scene({triggerElement: `#${elementId}-trigger`})
          .setVelocity(`#${elementId} > .jumbotron`, {opacity: 1}, {duration: 400})
          .addTo(this.scrollMagicController);
  }
}

export default HomeController;
