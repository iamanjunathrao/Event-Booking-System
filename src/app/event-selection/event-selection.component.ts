import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-selection',
  templateUrl: './event-selection.component.html',
  styleUrls: ['./event-selection.component.css']
})
export class EventSelectionComponent {
  events = [
    {
      name: 'The David Copperfield Show',
      description: 'Experience the magic of David Copperfield in this mesmerizing performance.',
      image: 'assets/david-copperfield-show.jpg'
    },
    {
      name: 'The Comedy Night',
      description: 'Laugh out loud with the best comedians in town at our hilarious comedy night.',
      image: 'assets/comedy-night.jpg'
    },
    {
      name: 'Concert Under the Stars',
      description: 'Enjoy an enchanting night of music with live performances from top artists.',
      image: 'assets/concert-under-the-stars.jpg'
    }
  ];

  selectedEvent: any; // Property to track the selected event

  constructor(private router: Router) {}

  selectEvent(event: any) {
    this.selectedEvent = event; // Update the selected event
  }

  bookEvent() {
    this.router.navigate(['/date-time-selection'], {
      queryParams: { eventName: this.selectedEvent?.name } // Pass the selected event name as a query parameter
    });
  }
}
