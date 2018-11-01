import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasaPageComponent } from './trasa-page.component';

describe('TrasaPageComponent', () => {
  let component: TrasaPageComponent;
  let fixture: ComponentFixture<TrasaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
