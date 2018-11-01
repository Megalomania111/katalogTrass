// import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrailsService {



  constructor(private http: HttpClient) { }


  url: string = 'https://nodejs-restapi-adz.herokuapp.com/tracks';
  //url: string = 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb';
  getTrails(): any {
    return this.http.get(this.url);
  }

  getTrail(id: string): any {
    return this.http.get(`https://nodejs-restapi-adz.herokuapp.com/track/${id}`);
  }

  createTrail(trail: {
    title: string,
    number: string,
    viaPoints: string,
    trackColor: string,
  }, token: string): any {
    let headers = new HttpHeaders({
      'x-Access-Token': token,
    });

    // headers.set('Authorization', 'Bearer ' + token);
    // const options = new RequestOptions({ headers: headers });
    return this.http.post('https://nodejs-restapi-adz.herokuapp.com/api/track_create',
      trail,
      {
        headers,
      },
    );
  }

  searchTrails(number): any {
    return this.http.get(`https://nodejs-restapi-adz.herokuapp.com/track/number/${number}`);
  }
}
