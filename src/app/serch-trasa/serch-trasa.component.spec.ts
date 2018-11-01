import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchTrasaComponent } from './serch-trasa.component';

describe('SerchTrasaComponent', () => {
  let component: SerchTrasaComponent;
  let fixture: ComponentFixture<SerchTrasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchTrasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchTrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
