import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasFormComponent } from './entradas-form.component';

describe('EntradasFormComponent', () => {
  let component: EntradasFormComponent;
  let fixture: ComponentFixture<EntradasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
