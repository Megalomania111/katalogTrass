import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../trails.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
	providers: [TrailsService]
})
export class HomePageComponent implements OnInit {

	trails = [];

	constructor(private trailsService: TrailsService) { }

	ngOnInit() {
		//this.trails = this.trailsService.trails;
		this.trailsService.getTrails().subscribe(trails => {
			this.trails = trails
		})
	}

}
