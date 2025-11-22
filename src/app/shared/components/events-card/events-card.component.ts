import { Component, Input } from '@angular/core';
import { EventCard } from '../../models/event-card.interface';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss'],
})
export class EventsCardComponent {
  @Input() eventCard!: EventCard;

  buttonText: string = 'View more'; // !!! Статические данные не выноси в переменные компонента, а пиши сразу в разметке. Особенно строчные

  get buttonRouterLink(): string { // !!! не юзай геттер. Вынеси эту динамическую строку в переменную и назначь ей значение через хук ngOnChanges
    console.log('я уебу твой код!'); // !!! запусти геттер с этим логом, открой консоль в браузере и поскроль
    return `/events/${this.eventCard.routerLink}`;
  }
}
