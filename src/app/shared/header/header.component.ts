import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSolidBackground = false;

  @HostListener('window:scroll') 
  onScroll() {
    this.isSolidBackground = window.scrollY > 50;
  }
}
