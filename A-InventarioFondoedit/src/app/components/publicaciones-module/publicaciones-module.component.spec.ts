import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesModuleComponent } from './publicaciones-module.component';

describe('PublicacionesModuleComponent', () => {
  let component: PublicacionesModuleComponent;
  let fixture: ComponentFixture<PublicacionesModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
