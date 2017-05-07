import { expect } from 'chai';
import { HomeController } from '../../controller/home';
import "reflect-metadata/Reflect";
describe('HomeController', () => {
  it('should give back `Home sweet home`', () => {
    let service = new HomeController();

    expect(service.get()).to.equal('Home sweet home');
  });
});
