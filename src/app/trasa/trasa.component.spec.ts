import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasaComponent } from './trasa.component';

describe('TrasaComponent', () => {
	let component: TrasaComponent;
	let fixture: ComponentFixture<TrasaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TrasaComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TrasaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
