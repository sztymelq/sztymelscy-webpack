import JumbotronModule from './jumbotron'
import JumbotronController from './jumbotron.controller';
import JumbotronComponent from './jumbotron.component';
import JumbotronTemplate from './jumbotron.html';

describe('Jumbotron', () => {
  let $rootScope, makeController;

  beforeEach(window.module(JumbotronModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new JumbotronController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(JumbotronTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = JumbotronComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(JumbotronTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(JumbotronController);
      });
  });
});
