
interface hero {
    maxImages: number,
    imageName: number
}

class HeroController implements hero {
    maxImages: number;
    imageName: number;
    $postLink: Function;

  constructor($interval) {
      const MS_PER_DAY: number = 1000;
      const weddingDate: any = new Date(2017, 7, 5, 16, 0, 0, 0);
      const now: any = new Date();
      const countFrom: number = (weddingDate - now) / MS_PER_DAY;
      let clock;
      this.maxImages = 5;
      this.imageName = 1;

      this.$postLink = function () {
          clock = new FlipClock($('.countdown-clock'), countFrom,  {
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
