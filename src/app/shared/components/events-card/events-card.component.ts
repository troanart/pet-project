import { Component, Input } from '@angular/core';
import { EventCard } from '../../models/event-card.interface';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss'],
})
export class EventsCardComponent {
  @Input() eventCard: EventCard = {
    id: 0,
    date: 0,
    title: '',
    mounth: '',
    text: '',
    time: '',
    category: '',
 
  };
}
