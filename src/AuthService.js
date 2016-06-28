import {Aurelia, inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(Aurelia, HttpClient)
export default class AuthService {
  session = null;

  constructor(Aurelia, HttpClient) {
    this.aurelia = Aurelia;
    this.http = HttpClient;

    this.session = JSON.parse(localStorage['ah12h3'] || null);
  }

  login(username, password) {
    this.http.post('/login', {username, password})
      .then(response => response.content)
      .then(session => {
    		localStorage['ah12h3'] = JSON.stringify(session);
    		this.session = session;
        this.aurelia.setRoot('app');
    	});
  }

  logout() {
		localStorage['ah12h3'] = null;
		this.session = null;
		this.aurelia.setRoot('login/login');
	}

  getUser() {
    return this.session.name;
  }

	isAuthenticated() {
		return this.session !== null;
	}

}
