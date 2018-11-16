import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasFormComponent } from './salidas-form.component';

describe('SalidasFormComponent', () => {
  let component: SalidasFormComponent;
  let fixture: ComponentFixture<SalidasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
