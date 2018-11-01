import { Component, OnInit } from '@angular/core';
import { TrailsService } from '../../trails.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-change-page',
  templateUrl: './change-page.component.html',
  styleUrls: ['./change-page.component.sass'],
  providers: [TrailsService]
})
export class ChangePageComponent implements OnInit {

  // 	user: any;
  // 	trails = [];

  // 	constructor(private trailsService: TrailsService, private userService: UserService) {
  // 		this.user = this.userService.currentUser;
  // 	}

  ngOnInit() {
    // this.trailsService.getTrails().subscribe(trails => {
    //   this.trails = trails;
    // }

  }
}
