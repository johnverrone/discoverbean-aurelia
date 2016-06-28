import {inject} from 'aurelia-framework';
import AuthService from 'AuthService';
import $ from 'jquery';

@inject(AuthService)
export class App {

  constructor(AuthService) {
    this.auth = AuthService;
  }

  attached() {
    $('.user-dropdown-button').dropdown();
  }

  configureRouter(config, router) {
    config.title = 'Discoverbean';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome/welcome', nav: false, title:'Welcome' },
      { route: 'feed', name: 'feed', moduleId: './feed/feed', nav: true, title:'Feed' }
    ]);

    this.router = router;
  }
}
