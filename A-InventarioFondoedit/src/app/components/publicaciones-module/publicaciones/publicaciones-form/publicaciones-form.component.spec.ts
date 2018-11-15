import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesFormComponent } from './publicaciones-form.component';

describe('PublicacionesFormComponent', () => {
  let component: PublicacionesFormComponent;
  let fixture: ComponentFixture<PublicacionesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
