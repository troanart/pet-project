import { Component, HostListener } from '@angular/core';
import { NavigationItem } from '../models/navigation-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSolidBackground = false;
  buttonText: string = 'Get consultation';
  buttonRouterLink: string = '/contact-us';
  navigationItems: NavigationItem[] = [
    {
      label: 'About Us',
      routerLink: '/about-us'
    },
    {
      label: 'Courses',
      routerLink: '/courses'
    },
    {
      label: 'Events',
      routerLink: '/events'
    },
    {
      label: 'Blog',
      routerLink: '/blog'
    },
    {
      label: 'Contacts',
      routerLink: '/contacts'
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isSolidBackground = window.scrollY > 50;
  }
}
