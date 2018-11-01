import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trasa',
  templateUrl: './trasa.component.html',
  styleUrls: ['./trasa.component.sass']
})
export class TrasaComponent implements OnInit {
  @Input() trail;
  @Input() user;

  constructor() {
    console.log(this.user);
  }

  ngOnInit() {
    console.log(this.user);
  }
}
