import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesViewComponent } from './materiales-view.component';

describe('MaterialesViewComponent', () => {
  let component: MaterialesViewComponent;
  let fixture: ComponentFixture<MaterialesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
