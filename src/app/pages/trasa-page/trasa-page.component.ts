import { Component, OnInit } from '@angular/core';
import { TrailsService } from 'src/app/trails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trasa-page',
  templateUrl: './trasa-page.component.html',
  styleUrls: ['./trasa-page.component.sass']
})
export class TrasaPageComponent implements OnInit {
  trail: any;

  constructor(private trailsService: TrailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trailsService.getTrail(id)
      .subscribe((t) => {
        this.trail = t;
      });
  }

}
