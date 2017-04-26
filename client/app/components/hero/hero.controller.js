class HeroController {
  constructor($timeout) {
    this.$timeout = $timeout;
  }

  $onInit() {
    this.$timeout(() => {
      this.logoNamesVisible = true;
    }, 1000);

    this.$timeout(() => {
      this.logoWelcomeVisible = true;
    }, 2500);
  }
}

HeroController.$inject = ['$timeout'];
export default HeroController;
