import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesFormComponent } from './materiales-form.component';

describe('MaterialesFormComponent', () => {
  let component: MaterialesFormComponent;
  let fixture: ComponentFixture<MaterialesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
