import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasViewComponent } from './entregas-view.component';

describe('EntregasViewComponent', () => {
  let component: EntregasViewComponent;
  let fixture: ComponentFixture<EntregasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
