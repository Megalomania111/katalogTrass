import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trasa',
  templateUrl: './trasa.component.html',
  styleUrls: ['./trasa.component.sass']
})
export class TrasaComponent implements OnInit {
  @Input() trail;
  @Input() isLoggedIn;

  constructor() {
    console.log(this.isLoggedIn);
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }
}
