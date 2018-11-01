import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  currentUser = {
    token: null,
  };

  constructor(private http: Http) { }

  register(user: any) {
    return this.http.post('http://nodejs-restapi-adz.herokuapp.com/user_create', user)
      .pipe(
        map((response: Response) => response.json()),
      );
  }

  login(user: { email: string, password: string }) {
    return this.http.post('http://nodejs-restapi-adz.herokuapp.com/authenticate', user)
      .pipe(
        map((response: Response) => response.json()),
        tap((r: any) => {
          if (r.success) {
            this.currentUser.token = r.token;
          }

          console.log(this.currentUser);
        }),
      );
  }
}
