import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasListComponent } from './salidas-list.component';

describe('SalidasListComponent', () => {
  let component: SalidasListComponent;
  let fixture: ComponentFixture<SalidasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
