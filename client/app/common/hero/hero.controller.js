class HeroController {
  constructor($interval) {
      const MS_PER_DAY = 1000;
      const weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);
      let clock;
      this.maxImages = 5;
      this.imageName = 1;

      this.$postLink = function () {
          console.log('postlink!', $('.countdown-clock'));
          clock = new FlipClock($('.countdown-clock'), (weddingDate - new Date()) / MS_PER_DAY,  {
            countdown: true,
            clockFace: 'DailyCounter'
          });

          const labels = $('.flip-clock-label');
          labels[0].innerHTML = 'Dni';
          labels[1].innerHTML = 'Godziny';
          labels[2].innerHTML = 'Minuty';
          labels[3].innerHTML = 'Sekundy';
      };

      $interval(() => {
          const currentImage = this.imageName + 1;
          this.imageName = currentImage % this.maxImages;
      }, 3000);
  }

    getCurrentImagePath() {
        return `/images/${this.imageName}.JPG`
    }
}

HeroController.$inject = ['$interval'];

export default HeroController;
