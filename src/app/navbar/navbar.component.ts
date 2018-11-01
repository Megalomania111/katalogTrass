import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn;

  constructor() {
    console.log(this.isLoggedIn);
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

}
