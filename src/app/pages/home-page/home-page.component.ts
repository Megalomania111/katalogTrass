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
  isLoggedIn: any;
  trails = [];

  constructor(private trailsService: TrailsService, private userService: UserService) {
    this.isLoggedIn = this.userService.isLoggedIn;
  }
  ngOnInit() {
    // this.trails = this.trailsService.trails;
    this.trailsService.getTrails().subscribe(trails => {
      console.log(trails);
      this.trails = trails;
    });
  }

}
