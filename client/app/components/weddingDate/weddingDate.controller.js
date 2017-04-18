import constants from '../../common/constants';

class WeddingDateController {
  constructor($interval) {
    this.$interval = $interval;
    this.items = constants.items;
    this.weddingDate = new Date(2017, 7, 5, 16, 0, 0, 0);

    this.time = [
      { id: 'months', name: 'Miesiące', value: 0 },
      { id: 'days', name: 'Dni', value: 0 },
      { id: 'hours', name: 'Godziny', value: 0 },
      { id: 'minutes', name: 'Minuty', value: 0 },
      { id: 'seconds', name: 'Sekundy', value: 0 }
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
  }
}

WeddingDateController.$inject = ['$interval'];

export default WeddingDateController;
