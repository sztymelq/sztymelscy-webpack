class JumbotronController {
  constructor() {
    // this.customStyle = { 'background-color': this.color };
    this.map = { center: { latitude: 51.5145388, longitude: 18.2100481 }, zoom: 8 };

    this.marker = {
      id: 0,
      coords: {
        latitude: 51.5145388,
        longitude: 18.2100481
      },
      options: { draggable: false },
      events: {}
    };
  }
}

export default JumbotronController;
