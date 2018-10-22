import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistPageComponent } from './regist-page.component';

describe('RegistPageComponent', () => {
  let component: RegistPageComponent;
  let fixture: ComponentFixture<RegistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
