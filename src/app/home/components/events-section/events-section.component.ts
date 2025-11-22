import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/services/events.service';
import { EventCard } from 'src/app/shared/models/event-card.interface';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss'],
})
export class EventsSectionComponent implements OnInit {
  events: EventCard[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  buttonText: string = 'Explore all events';  // статические даные. см. events-card.component строка 15
  buttonLink: string = '/events'  // статические даные. см. events-card.component строка 15
}
