import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrasaPageComponent } from './new-trasa-page.component';

describe('NewTrasaPageComponent', () => {
	let component: NewTrasaPageComponent;
	let fixture: ComponentFixture<NewTrasaPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NewTrasaPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NewTrasaPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
