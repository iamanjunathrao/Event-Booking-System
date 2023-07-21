import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-time-selection',
  templateUrl: './date-time-selection.component.html',
  styleUrls: ['./date-time-selection.component.css']
})
export class DateTimeSelectionComponent {
  selectedDate: string = '';
  selectedTimeSlot: string = '';

  timeSlots: string[] = ['10 AM', '12 PM', '3 PM', '7 PM', '10 PM']; // Array of available time slots

  constructor(private router: Router, private route: ActivatedRoute) {}

  updateTimeSlots() {
    // Logic to update available time slots based on the selected date
    // For example, you can fetch available time slots from a backend API
  }

  selectTimeSlot(slot: string) {
    this.selectedTimeSlot = slot;
  }

  makePayment() {
    this.router.navigate(['/payment'], {
      queryParams: {
        date: this.selectedDate,
        timeSlot: this.selectedTimeSlot,
        eventName: this.route.snapshot.queryParamMap.get('eventName') // Pass the event name as a query parameter
      },
    });
  }
}
