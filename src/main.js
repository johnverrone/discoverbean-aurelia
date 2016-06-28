import 'fetch';
import AuthService from 'AuthService';
import {HttpClient} from 'aurelia-http-client';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  configureContainer(aurelia.container);

  aurelia.start().then(() => {
    var auth = aurelia.container.get(AuthService);
    let root = auth.isAuthenticated() ? 'app' : 'login/login';
	  aurelia.setRoot(root);
  });
}

function configureContainer(container) {
  let http = new HttpClient();
  http.configure(config => {
    config
      .withBaseUrl('http://localhost:8080/api')
  });
  container.registerInstance(HttpClient, http);
}
