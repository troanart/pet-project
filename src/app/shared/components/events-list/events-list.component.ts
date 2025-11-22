import { Component, Input } from '@angular/core';
import { EventCard } from '../../models/event-card.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {
  @Input() events: EventCard[] = [];
  @Input() quantityCards: number = 0;
  
  get eventsToShow(): EventCard[] {
    return this.events.slice(0, this.quantityCards);
  }
}
