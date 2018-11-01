import { Component } from '@angular/core';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isLoggedIn = false;
  constructor(private userService: UserService) {
    this.isLoggedIn = this.userService.isLoggedIn;
  }

}
