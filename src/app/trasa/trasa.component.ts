import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-trasa',
	templateUrl: './trasa.component.html',
	styleUrls: ['./trasa.component.sass']
})
export class TrasaComponent {

	@Input() trail;
}
