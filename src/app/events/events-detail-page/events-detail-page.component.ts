import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventCard } from 'src/app/shared/models/event-card.interface';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-events-detail-page',
  templateUrl: './events-detail-page.component.html',
  styleUrls: ['./events-detail-page.component.scss'],
})
export class EventsDetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private eventsSeervice: EventsService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.event = this.eventsSeervice.getEventsBySlug(slug);
    } else {
      this.event = undefined;
    }
  }

  event: EventCard | undefined;
}
