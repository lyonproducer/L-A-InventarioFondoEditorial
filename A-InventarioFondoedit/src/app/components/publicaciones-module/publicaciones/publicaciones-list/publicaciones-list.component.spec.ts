import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesListComponent } from './publicaciones-list.component';

describe('PublicacionesListComponent', () => {
  let component: PublicacionesListComponent;
  let fixture: ComponentFixture<PublicacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
