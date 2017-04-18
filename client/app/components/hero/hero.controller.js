class HeroController {
  constructor($interval, $timeout) {
    let number = 0;
    const SLIDES_INTERVAL = 6000;
    this.maxImages = 5;
    this.currentImage = this.computeImageBackground(number);
    this.images = [...Array(this.maxImages).keys()];
    this.$timeout = $timeout;

    $interval(() => {
      number = (number + 1) % this.maxImages;
      this.currentImage = this.computeImageBackground(number);
    }, SLIDES_INTERVAL);
  }

  $onInit() {
    this.$timeout(() => {
      this.logoNamesVisible = true;
    }, 1000);

    this.$timeout(() => {
      this.logoWelcomeVisible = true;
    }, 2500);
  }

  computeImageBackground(number) {
    return `url("/images/${number}.JPG")`;
  }

  isCurrentImage(name) {
    return this.currentImage === name;
  }
}

HeroController.$inject = ['$interval', '$timeout'];
export default HeroController;
