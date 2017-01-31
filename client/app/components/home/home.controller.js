class HomeController {
  constructor() {
    this.name = 'home';
  }

  $onInit() {
      const smCtrl = new ScrollMagic.Controller();
      new ScrollMagic.Scene({triggerElement: "#trigger"})
          .setVelocity("#onas > .jumbotron", {opacity: 0}, {duration: 400})
          .addTo(smCtrl);

      // new ScrollMagic.Scene({
      //     triggerElement: "#trigger"
      // }).setTween("#onas", 0.5, {backgroundColor: "green", scale: 2.5})
      //     .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
      //     .addTo(smCtrl);

    console.log('ScrollMagic', ScrollMagic);
  }
}

export default HomeController;
