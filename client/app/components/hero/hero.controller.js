class HeroController {
    constructor($interval) {
        const SLIDES_INTERVAL = 4000;
        const MS_PER_DAY = 1000;
        const weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);
        this.maxImages = 5;
        this.currentImage = 1;
        this.images = [...Array(this.maxImages).keys()];

        this.$onInit = () => {
            new FlipClock($('.countdown-clock'), (weddingDate - new Date()) / MS_PER_DAY, {
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
            this.currentImage = (this.currentImage + 1) % this.maxImages;
        }, SLIDES_INTERVAL);
    }

    computeImagePath(name) {
        return `/images/${name}.JPG`
    }

    isCurrentImage(name) {
        return this.currentImage === name;
    }
}

HeroController.$inject = ['$interval'];
export default HeroController;
