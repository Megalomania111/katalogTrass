import { Component } from '@angular/core';
import { TrailsService } from './trails.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	providers: [TrailsService]
})
export class AppComponent {

	trails = [];

	constructor(private trailsService: TrailsService) { }

	ngOnInit() {
		//this.trails = this.trailsService.trails;
		this.trailsService.getTrails().subscribe(trails => {
			this.trails = trails
		})
	}

}