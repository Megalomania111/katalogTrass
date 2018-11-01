import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../trails.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  providers: [TrailsService]
})
export class HomePageComponent implements OnInit {
  user: any;
  trails = [];

  constructor(private trailsService: TrailsService, private userService: UserService) {
    this.user = this.userService.currentUser;
  }
  ngOnInit() {
    // this.trails = this.trailsService.trails;
    this.trailsService.getTrails().subscribe(trails => {
      this.trails = trails;
    });
  }

}
