import { Component, Input } from '@angular/core';
import { EventCard } from '../../models/event-card.interface';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss'],
})
export class EventsCardComponent {
  @Input() eventCard!: EventCard;

  buttonText: string = 'View more';

  get buttonRouterLink(): string {
    return `/events/${this.eventCard.routerLink}`;
  }
}
