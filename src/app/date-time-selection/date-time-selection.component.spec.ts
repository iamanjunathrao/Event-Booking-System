import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeSelectionComponent } from './date-time-selection.component';

describe('DateTimeSelectionComponent', () => {
  let component: DateTimeSelectionComponent;
  let fixture: ComponentFixture<DateTimeSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateTimeSelectionComponent]
    });
    fixture = TestBed.createComponent(DateTimeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
