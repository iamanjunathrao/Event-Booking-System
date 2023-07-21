import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectionComponent } from './event-selection.component';

describe('EventSelectionComponent', () => {
  let component: EventSelectionComponent;
  let fixture: ComponentFixture<EventSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSelectionComponent]
    });
    fixture = TestBed.createComponent(EventSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
