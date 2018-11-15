import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesViewComponent } from './publicaciones-view.component';

describe('PublicacionesViewComponent', () => {
  let component: PublicacionesViewComponent;
  let fixture: ComponentFixture<PublicacionesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
