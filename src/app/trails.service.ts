import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TrailsService {



	constructor(private http: Http) { }


	//	url: string = 'https://nodejs-restapi-adz.herokuapp.com/tracks';
	url: string = 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb';
	getTrails() {

		return this.http.get(this.url)
			.pipe(map(response => response.json()))

			.pipe(map(response => response.results))
			.pipe(map(trails => {
				return trails.map(u => {
					return {
						name: u.name,
						image: u.image,
						trackColor: u.trackColor,
						number: u.number,
						viaPoints: u.viaPoints
					}
				})
			})
		}
}
//	console.log(results);

}