import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesListComponent } from './materiales-list.component';

describe('MaterialesListComponent', () => {
  let component: MaterialesListComponent;
  let fixture: ComponentFixture<MaterialesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
