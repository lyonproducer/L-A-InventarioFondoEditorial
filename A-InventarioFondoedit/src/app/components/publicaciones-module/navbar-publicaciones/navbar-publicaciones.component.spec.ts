import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPublicacionesComponent } from './navbar-publicaciones.component';

describe('NavbarPublicacionesComponent', () => {
  let component: NavbarPublicacionesComponent;
  let fixture: ComponentFixture<NavbarPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
