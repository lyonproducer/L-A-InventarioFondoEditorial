import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasFormComponent } from './entregas-form.component';

describe('EntregasFormComponent', () => {
  let component: EntregasFormComponent;
  let fixture: ComponentFixture<EntregasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
