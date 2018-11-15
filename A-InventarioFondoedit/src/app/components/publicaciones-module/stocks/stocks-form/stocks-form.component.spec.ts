import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksFormComponent } from './stocks-form.component';

describe('StocksFormComponent', () => {
  let component: StocksFormComponent;
  let fixture: ComponentFixture<StocksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
