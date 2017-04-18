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

    // const weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);
    // const MS_PER_DAY = 1000;
    // new FlipClock($('.countdown-clock'), (weddingDate - new Date()) / MS_PER_DAY, {
    //   countdown: true,
    //   clockFace: 'DailyCounter'
    // });
    //
    // const labels = $('.flip-clock-label');
    // labels[0].innerHTML = 'Dni';
    // labels[1].innerHTML = 'Godziny';
    // labels[2].innerHTML = 'Minuty';
    // labels[3].innerHTML = 'Sekundy';
  }

  computeImageBackground(number) {
    return `url("/images/${number}.JPG")`;
  }

  // computeImagePath(name) {
  //   return `/images/${name}.JPG`;
  // }

  isCurrentImage(name) {
    return this.currentImage === name;
  }
}

HeroController.$inject = ['$interval', '$timeout'];
export default HeroController;
