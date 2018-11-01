import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TrailsService {



	constructor(private http: Http) { }


	url: string = 'https://nodejs-restapi-adz.herokuapp.com/tracks';
	//url: string = 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb';
	getTrails() {
		return this.http.get(this.url)
			.pipe(
				map((response: Response) => response.json()),
			);
	}
}
